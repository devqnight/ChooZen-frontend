import React, { useState } from 'react';
import { View, Text } from "react-native";

import { DateInput } from '../../components/inputs/DateInput';

import containerStyles from '../../theme/container_styles';

export default function DateSection({ inputTitle, date, onChangeDate }) {

    return (
        <View style={ containerStyles.inputSection }>
            <Text style={ containerStyles.inputSectionTitle }> { inputTitle } </Text>
            <DateInput date={date} onChangeDate={ (date) => {onChangeDate(date);}} title={inputTitle}/>
        </View>
    );
}