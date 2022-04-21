import React, {useCallback} from 'react';
import { TouchableOpacity, StyleSheet } from "react-native";

const RoundColorButton = (props) => {

    const isSelected = useCallback((color, current) => {
        if(color == current)
            return {borderColor: "#FFF",
            borderWidth: 3,};
        return {borderColor: color};
    });

    return (
        <TouchableOpacity 
            style={[style.button, props.color, isSelected(props.color.color, props.current)]}
            onPress={props.onPress}
        />
    );
}

export {RoundColorButton};

const style = StyleSheet.create({
    button: {
        height: 50,
        width: 50,
        borderRadius: 180,
        margin: 10
    }
});