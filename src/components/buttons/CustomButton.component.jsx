import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import buttonStyle from "./button-style";

const CustomButton = ({ onPressButton, text, styleName, enabled, theme, textStyle }) => {
    let styleButton ={};
    let styleText = {};

    switch (styleName) {
        case "Save":
            styleButton = theme;
            styleText = styles.saveText;
            break;
        case "Close":
            styleButton = {...styles.closeButton, ...theme};
            styleText = buttonStyle.textClose;
            break;
        default:
            styleButton = theme;
            styleText = textStyle;
            break;
    }
    
    return (
        <TouchableOpacity disabled={ enabled } style={ [ buttonStyle.button, styleButton, {elevation: 3} ] } onPress={onPressButton}>
            <Text style={ [ styles.buttonText, styleText ] }>{ text }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        textAlign: "center",
        textAlignVertical: "center"
    },
    closeButton: {
        backgroundColor: "red"
    },
    saveText: {
        fontSize: 16,
        color: "white"
    },
    closeButton: {
        fontSize: 16,
        color: "white"
    }
});

export {CustomButton}