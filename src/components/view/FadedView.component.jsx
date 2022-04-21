import React, { Children } from "react";
import {View, StyleSheet} from 'react-native';
import { hexToRgb } from "../../utils/tools";

const divisor = 1000;
const pi = 1/divisor;

const generateCollection = (color, height, dir) => {

    let i;
    let collection = [];
    let pixelStyle = {
        width: "100%",
        position: "absolute",
        height: height,
        flexDirection: 'column'
    }
    if(dir === 'up'){
        pixelStyle = {
            ...pixelStyle, bottom: 0
        }
        collection.push(0);
        i = pi;
        while(i < 1){
            collection.push(i);
            i += pi;
        }
        collection.push(1);
    } else {
        pixelStyle = {
            ...pixelStyle, top: 0
        }
        collection.push(1);
        i = 1.00;
        while(i > 0){
            collection.push(i);
            i -= pi;
        }
        collection.push(0);
    }

    let r = 0, g = 0, b = 0;
    if(hexToRgb(color)){
        r = hexToRgb(color).r;
        g = hexToRgb(color).g;
        b = hexToRgb(color).b;
    }
    return {
        collection,
        pixelStyle,
        r, g, b
    };
}

const FadedView = (props) => {
    const {children, height} = props;
    const {collection, pixelStyle, r, g, b} = generateCollection(props.color, props.height, props.dir);

    return (
        <View style={{flexDirection: 'column'}}>
            <View style={pixelStyle}>
                {collection.map((o, key) => {
                    <View key={key} style={{height: (height/divisor), backgroundColor: `rgba(${r}, ${g}, ${b}, ${o})`}} />
                })}
            </View>
            {children}
        </View>
    );

}

export {FadedView};
