import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { RoundColorButton } from "../../components/buttons/RoundColorButton.component";

const ColorGrid = (props) => {

    return (
        <View style={[style.section, style.buttonsColorSection]}>
            {props.colors.map((color, index) => {
                return(
                    <RoundColorButton key={index} color={{ color: color, backgroundColor: color }} current={props.current} onPress={() => props.callback(color)} />
                )
            })}
        </View>
    );
}

export {ColorGrid};

const style = StyleSheet.create({
    section: {
        backgroundColor: "#EDEDED"
    },
    buttonsColorSection: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        backgroundColor: "#CFCFCF"
    }
});