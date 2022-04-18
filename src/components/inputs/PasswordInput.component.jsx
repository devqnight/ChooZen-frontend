import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { TouchableIcon } from '../icons/TouchableIcon.component';
 

const PasswordInput = (props) => {

    //-------------
    // VARIABLES
    //-------------

    const [visibility, setVisibility] = useState(false);
    const [icon, setIcon] = useState("eye-off");


    //-------------
    // FUNCTIONS
    //-------------

    const updateVisibility = () => {
        setVisibility(!visibility);
        setIcon(visibility ? "eye-off" : "eye");
    } 

    return (
        <View style={style.pwdInputView}>
            <TextInput 
                style={style.pwdInputInput}
                onChangeText={ props.onChangeText }
                value={ props.value }
                placeholder={ props.placeHolder }
                secureTextEntry={!visibility} 
                onBlur={ props.onBlur }
                autoFocus
                onEndEditing={ props.onBlur }
            />
            <TouchableIcon 
                iconName={icon}
                onTouch={ () => { updateVisibility(); } }
                height={ 20 }
            />
        </View>
    );
}

export {PasswordInput};

const style = StyleSheet.create({
    pwdInputView: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    pwdInputInput: {
        width: "80%"
    }
});