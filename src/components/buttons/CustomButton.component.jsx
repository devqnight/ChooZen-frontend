import React from "react";
import { TouchableOpacity, Text } from "react-native";

import basicStyles from "../../themes/basic_components_styles";

const CustomButton = ({ onPressButton, text, styleName, enabled, theme }) => {

    let styleButton ={};
    let styleText = {};

    switch (styleName) {
        case "Save":
            styleButton = theme;
            styleText = basicStyles.textSave;
            break;
        case "Close":
            styleButton = {...basicStyles.buttonClose, ...theme};
            styleText = basicStyles.textClose;
            break;
        default:
            styleButton = theme;
            styleText = basicStyles.textSave;
            break;
    }

    return (
        <TouchableOpacity disabled={ enabled } style={ [ basicStyles.button, styleButton ] } onPress={ () => onPressButton() }>
            <Text style={ [ basicStyles.button_text, styleText ] }>{ text }</Text>
        </TouchableOpacity>
    );
}

export {CustomButton}