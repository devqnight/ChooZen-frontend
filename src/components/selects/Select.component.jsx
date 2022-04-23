import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const Select = (props) => {
    const optionNames = [];

    if(props.options)
        for(let option of props.options)
            optionNames.push(option.name);

    return (
        <View>
            <SelectDropdown 
                data={optionNames}
                defaultValueByIndex={props.active}
                onSelect={props.updateSelection}
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                dropdownIconPosition={"right"}
            />
        </View>
    );
}

export { Select };

const styles = StyleSheet.create({
    buttonStyle: {
        height: 30,
        borderRadius: 7,
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
    },
    buttonTextStyle: {
        color: "white"
    }
});