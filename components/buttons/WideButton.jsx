import React from "react";
import { TouchableOpacity, Text } from "react-native";

import basicStyles from "../../theme/basic_components_styles";

export default function WideButton({ onPressButton, text, styleName, enabled }) {

    let styleButton ={};
    let styleText = {};


    switch (styleName) {
        case "Save":
            styleButton = basicStyles.buttonSave;
            styleText = basicStyles.textSave;
            break;
        case "Close":
            styleButton = basicStyles.buttonClose;
            styleText = basicStyles.textClose;
            break;
    
        default:
            break;
    }

    return (
        <TouchableOpacity disabled={ enabled } style={ [ basicStyles.button, styleButton ] } onPress={ () => onPressButton() }>
            <Text style={ [ basicStyles.button_text, styleText ] }>{ text }</Text>
        </TouchableOpacity>
    );
}