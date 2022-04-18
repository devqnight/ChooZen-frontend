import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { BasicInput } from './BasicInput.component';
import { PasswordInput } from './PasswordInput.component';
import { ErrorMsg } from '../ErrorMsg.component';
import { DateInput } from './DateInput.component';
import { hasNumber } from '../../utils/tools';
 
const Input = (props) => {
    //-------------
    // VARIABLES
    //-------------

    const [showInput, setShowInput] = useState(false);
    const [valid, setValid] = useState(true);
    const [errorMsg, setErrMsg] = useState(null);


    //-------------
    // FUNCTIONS
    //-------------
    
    const titleLabelFontSize = useCallback(() => {
        const fontAdjust = {
            fontSize: showInput ? 10 : 20
        }
        return fontAdjust
    },[showInput]);

    const onFocus = () => {
        setShowInput(true);
    }

    const borderBottomColor = useCallback(() => {
        const borderBottomColor = {
            borderBottomColor: valid ? "black" : "red"
        }
        return borderBottomColor;
    }, [valid]);

    const validate = (value) => {
        if(!props.required)
            return true;
        if(value){
            if(props.pwd && props.register){
                if(value.length < 8){
                    setErrMsg("Password must have at least 8 characters");
                    return false;
                }
                else if(!hasNumber(value)){
                    setErrMsg("Password must have numbers");
                    return false;
                }
                else if(props.original && props.original !== value){
                    setErrMsg("Passwords do not match !");
                    return false;
                }
                setErrMsg(null);
                return true;
            } else {
                return true;
            }
        }
    }

    const onBlur = () => {
        setValid(validate(props.value));
        if(props.required && !props.value){
            setErrMsg("Please fill this field");
            setValid(false);
            //props.setError(true);
        }
        else if(!props.value){
            setShowInput(false);
        }
        else {
            if(valid){
                setErrMsg(null);
                setValid(true);
            }
        }
    }
    

    //-------------
    // INIT
    //-------------

    let input;

    if(props.pwd)
        input = <PasswordInput 
                    onChangeText={text => {setValid(validate(text)); props.onChangeText(text);} }
                    value={props.value}
                    onBlur={() => onBlur()} 
                />;
    else if(props.date)
        input =  <DateInput 
                    value={props.value} 
                    age={props.age}
                    setErrMsg={ setErrMsg }
                    errorMsg={ errorMsg }
                    setValid={ setValid }
                    onChangeDate={ props.onChangeDate } 
                    onBlur={() => onBlur()} 
                />;
    else
        input = <BasicInput 
                    onChangeText={props.onChangeText} 
                    value={props.value}
                    onBlur={() => onBlur()} 
                />;

    return (
        <View>
            <View style={[style.input]}>
                <View style={[style.inputInner, borderBottomColor()]}>
                    <Text 
                        style={[titleLabelFontSize()]} 
                        onPress={() => onFocus()}
                    >
                        {props.title}
                    </Text>
                    {showInput && input}
                </View>
            </View>
            <ErrorMsg error={!valid} msg={errorMsg} />
        </View>
    );
}

export {Input};

const style = StyleSheet.create({
    input: {
        backgroundColor: "#dedede",
        borderRadius: 5,
        height: 50,
        padding: 5,
        margin: 5,
        justifyContent: "flex-end"
    },
    inputInner: {
        borderBottomWidth: "60%",
        borderBottomWidth: 1,
    },
    inputTitle: {
        fontSize: 16
    }
});