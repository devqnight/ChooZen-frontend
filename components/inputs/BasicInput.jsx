import React from 'react';
import { View, TextInput } from "react-native";

import basicStyles from "../../theme/basic_components_styles";

export default function BasicInput(props) {
    return (
        <View style={ basicStyles.basicInputView }>
            <TextInput value={ props.text } editable={props.editable} style={ basicStyles.basicInput } placeholder={ props.placeHolder } onChangeText={ props.onChangeInput } />
        </View> 
    );
}


