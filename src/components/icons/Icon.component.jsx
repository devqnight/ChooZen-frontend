import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ iconName, color, height }) => {

    return (
        <MaterialCommunityIcons
            style={{width: height}}
            size={ height }
            name={ iconName }
            color={ color }
        />
    );
};

export {Icon};