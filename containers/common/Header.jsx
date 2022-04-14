import React from 'react';
import { View, Text } from 'react-native';
import { TouchableIcon } from '../../components/icons/TouchableIcon';

import { GroupDropdown } from '../Group/GroupDropdown';

import containerStyles from '../../theme/container_styles';
 
const Header = (props) => {

    const profile = props.title == "profile";

    if(profile){
        return (
            <View style={[containerStyles.headerStyle, {backgroundColor: props.backgroundColor}]}>
                <Text style={containerStyles.headerTitleStyle}>{props.title}</Text>
                <TouchableIcon iconName="logout-variant" onTouch={props.onTouch} height={30} color="#FFF"/>
            </View>
        );
    }

    return (
        <View style={[containerStyles.headerStyle, {backgroundColor: props.backgroundColor}]}>
            <Text style={containerStyles.headerTitleStyle}>{props.title}</Text>
            <GroupDropdown groups={['group']} />
        </View>
    );
}

export {Header};