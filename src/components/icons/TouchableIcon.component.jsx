import React from 'react';
import { TouchableOpacity } from 'react-native';

import {Icon} from './Icon.component';

import basicStyles from '../../themes/basic_components_styles';

const TouchableIcon = ({height, onTouch, style, color, iconName}) => {

    return (
        <TouchableOpacity
            onPress={onTouch}
            style={[{height: height, width: height}, style]} >
            <Icon  
                iconName={ iconName } 
                height={ height }
                color= { color }
            />
        </TouchableOpacity>
    );
}

export {TouchableIcon};