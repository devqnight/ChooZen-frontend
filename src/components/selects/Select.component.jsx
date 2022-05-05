import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const Select = (props) => {

    return (
        <View>
            <SelectDropdown 
                data={props.options}
                defaultValueByIndex={props.active}
                onSelect={props.updateSelection}
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                buttonTextAfterSelection={(item, index) => {
                    return item.title;
                }}
                rowTextForSelection={(item, index) => {
                    return item.title;
                }}
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