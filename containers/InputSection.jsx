import React from 'react';
import { View, Text } from "react-native";

import BasicInput from '../components/inputs/BasicInput';

import containerStyles from '../theme/container_styles';

export default function InputSection({ text, inputTitle, placeHolder, onChangeInput }) {
    return (
        <View style={ containerStyles.inputSection }>
            <Text style={ containerStyles.inputSectionTitle }> { inputTitle } </Text>
            <BasicInput text={ text } placeHolder={ placeHolder } onChangeInput={ onChangeInput } />
        </View>
    );
}