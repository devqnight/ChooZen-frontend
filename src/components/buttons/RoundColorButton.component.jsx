import React from 'react';
import { TouchableOpacity, StyleSheet } from "react-native";

const RoundColorButton = (props) => {
    return (
        <TouchableOpacity 
            style={[style.button, props.color, props.selected]}
            onPress={props.onPress}
        />
    );
}

export {RoundColorButton};

const style = StyleSheet.create({
    button: {
        height: 50,
        width: 50,
        borderWidth: 2,
        borderRadius: 180,
        margin: 10
    }
});