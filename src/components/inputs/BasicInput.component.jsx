import React from 'react';
import { View, TextInput } from 'react-native';
 
const BasicInput = (props) => {

    return (
        <View>
            <TextInput 
                onChangeText={props.onChangeText}
                value={props.value}
                onBlur={ props.onBlur }
                autoFocus
            />
        </View>
    );
}

export {BasicInput};