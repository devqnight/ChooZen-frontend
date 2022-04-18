import React from 'react';
import { View, Text } from 'react-native';
 
const ErrorMsg = (props) => {

    if(!props.error)
        return <></>;
    
    return (
        <View>
            <Text style={{color: "red"}}>{props.msg}</Text>
        </View>
    );
}

export {ErrorMsg};