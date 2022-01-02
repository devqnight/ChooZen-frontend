import React from 'react';
import { View, TextInput } from "react-native";

import basicStyles from "../../theme/basic_components_styles";

export default function BasicInput({ text, placeHolder, onChangeInput }) {
    return (
        <View style={ basicStyles.basicInputView }>
            <TextInput value={ text } style={ basicStyles.basicInput } placeholder={ placeHolder } onChangeText={ onChangeInput } />
        </View> 
    );
}


