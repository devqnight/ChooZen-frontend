import React, { useState } from 'react';
import { View, Text } from "react-native";

import BasicInput from '../components/inputs/BasicInput';
import { PasswordInput } from '../components/inputs/PasswordInput';

import containerStyles from '../theme/container_styles';

export default function InputSection({ text, inputTitle, placeHolder, onChangeInput, password }) {

    return (
        <View style={ containerStyles.inputSection }>
            <Text style={ containerStyles.inputSectionTitle }> { inputTitle } </Text>
            {!password && 
                <BasicInput text={ text } placeHolder={ placeHolder } onChangeInput={ onChangeInput } />
            }
            {password &&
                <PasswordInput height={45} placeHolder={ placeHolder } onChangeInput={ onChangeInput } value={""} />
            }

        </View>
    );
}