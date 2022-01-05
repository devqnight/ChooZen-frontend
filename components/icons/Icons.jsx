import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icons = ({ iconName, color }) => {

    return (
        <MaterialCommunityIcons 
            size={ 32 }
            name={ iconName }
            color={ color }
        />
    );
};

export default Icons;