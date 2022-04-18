import React from 'react';
import { TouchableOpacity } from 'react-native';

import {Icon} from './Icon.component';

import basicStyles from '../../themes/basic_components_styles';

const TouchableIcon = (props) => {

    const height = props.height;

    return (
        <TouchableOpacity
            onPress={ () => { props.onTouch(); } }
            style={[basicStyles.passwordInputIcon, {height: height, width: height}]} >
            <Icon  
                iconName={ props.iconName } 
                height={ height }
                color= { props.color }
            />
        </TouchableOpacity>
    );
}

export {TouchableIcon};