import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icons from './Icons';

import basicStyles from '../../theme/basic_components_styles';

export const TouchableIcon = props => {

    const height = props.height;

    return (
        <TouchableOpacity
            onPress={ () => { props.onTouch(); } }
            style={[basicStyles.passwordInputIcon, {height: height, width: height}]} >
            <Icons  
                iconName={ props.iconName } 
                height={ height }
            />
        </TouchableOpacity>
    );
}