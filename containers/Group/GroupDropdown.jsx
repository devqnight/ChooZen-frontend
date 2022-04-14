import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { TouchableIcon } from '../../components/icons/TouchableIcon';

import containerStyles from '../../theme/container_styles';
 
const GroupDropdown = (props) => {

    const groupNames = [];

    const groupPush = (name) => {
        if(groupNames.find(x => x == name))
            return;
        let temp = groupNames;
        temp.push(name);
    }

    const updateGroup = (item, index) => {
        console.log(item);
        console.log(index);
    }

    for(let groupName of props.groups){
        groupPush(groupName);
    }

    groupPush("Famille");
    groupPush("LP GL");
    groupPush("Groupe Ciné");

    return (
        <View>
            <SelectDropdown 
                data={groupNames}
                defaultValueByIndex={0}
                onSelect={
                    (item, index) => {
                        updateGroup(item, index)
                    }
                }
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                dropdownIconPosition={"right"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 30,
        borderRadius: 7,
        backgroundColor: 'rgba(52, 52, 52, 0.1)'
    },
    buttonTextStyle: {
        color: "white"
    }
});

export {GroupDropdown};