import React, { useState } from 'react';
import { View, Text } from "react-native";

import BasicInput from '../components/inputs/BasicInput';
import { PasswordInput } from '../components/inputs/PasswordInput';

import containerStyles from '../theme/container_styles';

export default function InputSection({ width, text, inputTitle, placeHolder, onChangeInput, password, error, errorText, editable }) {

    var viewStyle = {};

    if( width ){
        viewStyle = {
            width: width
        };
    }


    return (
        <View style={ [containerStyles.inputSection, viewStyle] }>
            <Text style={ containerStyles.inputSectionTitle }> { inputTitle } </Text>
            {!password && 
                <BasicInput editable={editable} text={ text } placeHolder={ placeHolder } onChangeInput={ onChangeInput } />
            }
            {password &&
                <PasswordInput editable={editable} height={45} placeHolder={ placeHolder } onChangeInput={ onChangeInput } value={""} />
            }
            {error && <Text style={{color: "red"}}>{errorText}</Text>}
        </View>
    );
}