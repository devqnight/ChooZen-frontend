import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icons = ({ iconName, color, height }) => {

    return (
        <MaterialCommunityIcons 
            //size={ 32 }
            size={ height }
            name={ iconName }
            color={ color }
        />
    );
};

export default Icons;