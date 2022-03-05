import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import { TouchableIcon } from '../icons/TouchableIcon';

import basicStyles from '../../theme/basic_components_styles';

export const PasswordInput = (props) => {

    const [value, setValue] = useState(props.value);
    const [visibility, setVisibility] = useState(false);
    const [icon, setIcon] = useState("eye-off");

    const height = props.height;

    const updateText = (text) => {
        setValue(text);
        props.onChangeInput(text);
    };

    const updateVisibility = () => {
        setVisibility(!visibility);
        setIcon(visibility ? "eye-off" : "eye");
    } 

    return (
        <View style={{ display:"flex", marginVertical: 5 }} >
            <View style={ basicStyles.passwordInput } >
                <TextInput 
                    style={[basicStyles.passwordInputTextInput, basicStyles.basicInput]}
                    onChangeText={(text) => updateText(text)}
                    value={value}
                    editable={props.editable}
                    placeholder={ props.placeHolder }
                    secureTextEntry={!visibility} />
                <TouchableIcon 
                    iconName={icon}
                    onTouch={ () => { updateVisibility(); } }
                    height={ 20 } />
            </View>
        </View>
    );
};

PasswordInput.defaultProps = {
    label: '',
    height: (20)
};

//