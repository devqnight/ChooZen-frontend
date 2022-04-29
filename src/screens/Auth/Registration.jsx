import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { store } from "../../store";
import { register } from "../../actions/auth.actions";
import { checkAuthentication } from "../../actions/user.actions";

import { Input } from "../../components/inputs/Input.component";
import { ErrorMsg } from "../../components/ErrorMsg.component";
import { CustomButton } from "../../components/buttons/CustomButton.component";
import { Loading } from "../Loading";

import { formatDate } from "../../utils/tools";

const Registration = () => {
    //-----------
    // GLOBAL
    //-----------

    const nav = useNavigation();
    const theme = useSelector((state) => state.theme);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    //-------------
    // VARIABLES
    //-------------

    const [loginStr, setLoginStr] = useState(null);
    const [emailStr, setEmailStr] = useState(null);
    const [firstnameStr, setFirstnameStr] = useState(null);
    const [lastnameStr, setLastnameStr] = useState(null);
    const [pwdStr, setPwdStr] = useState(null);
    const [confPwdStr, setConfPwdStr] = useState(null);
    const [date, setDate] = useState(new Date());
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    //-------------
    // FUNCTIONS
    //-------------

    const doRegister = async () => {
        setIsLoading(true);
        console.log(pwdStr);
        await dispatch(register({
            firstname: firstnameStr,
            lastname: lastnameStr,
            email: emailStr,
            login: loginStr,
            password1: pwdStr,
            password2: confPwdStr,
            birthdate: formatDate(date)
        }));
        if(auth.err){
            setIsLoading(false);
            let msg = "Error on register";
            if(auth.err.non_field_errors)
                msg = auth.err.non_field_errors[0]
            setErrorMsg(msg);
            setError(true);
        }
    }


    const goBack = () => {
        nav.navigate('Login');
    }

    return (
        <>
        <KeyboardAvoidingView 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <View style={[
                {
                    flexGrow: 1,
                    borderRadius: 10,
                    margin: 20,
                    alignItems: "center",
                    paddingTop: 20,
                    backgroundColor: "#fff",
                },
                style.elevation
            ]} >
                <View style={[style.componentContainer, style.titleContainer]}>
                    <Text style={style.title}>Register</Text>
                </View>
                <View style={[style.componentContainer, style.inputs]}>
                    <Input 
                        title="Username"
                        required={true}
                        value={loginStr}
                        onChangeText={(text) => setLoginStr(text)}
                        style={{backgroundColor: theme.backgroundColor, color: "white"}}
                    />
                    <Input 
                        title="Email"
                        required={true}
                        value={emailStr}
                        onChangeText={(text) => setEmailStr(text)}
                        style={{backgroundColor: theme.backgroundColor, color: "white"}}
                    />
                    <Input 
                        title="Password"
                        required={true}
                        pwd={true}
                        value={pwdStr}
                        register={true}
                        onChangeText={(text) => setPwdStr(text)}
                        style={{backgroundColor: theme.backgroundColor, color: "white"}}
                    />
                    <Input 
                        title="Confirm Password"
                        required={true}
                        pwd={true}
                        register={true}
                        original={pwdStr}
                        value={confPwdStr}
                        onChangeText={(text) => setConfPwdStr(text)}
                        style={{backgroundColor: theme.backgroundColor, color: "white"}}
                    />
                </View>
                <View style={[style.componentContainer, style.inputs]}>
                    <Input 
                        title="First Name"
                        value={firstnameStr}
                        onChangeText={(text) => setFirstnameStr(text)}
                        style={{backgroundColor: theme.backgroundColor, color: "white"}}
                    />
                    <Input 
                        title="Last Name"
                        value={lastnameStr}
                        onChangeText={(text) => setLastnameStr(text)}
                        style={{backgroundColor: theme.backgroundColor, color: "white"}}
                    />
                    <Input 
                        title="Birthdate"
                        required={true}
                        date={true}
                        age={true}
                        value={date}
                        onChangeDate={(date) => setDate(date)}
                        style={{backgroundColor: theme.backgroundColor, color: "white"}}
                    />
                </View>
                <ErrorMsg error={error} msg={errorMsg} />
                <View style={[style.componentContainer, style.buttonContainer]}>
                    <CustomButton 
                        text="Register"
                        onPressButton={() => doRegister()}
                        styleName="Save"
                        theme={{backgroundColor: theme.backgroundColor, borderRadius: 5, marginTop: 10, width: "48%"}}
                    />
                    <CustomButton 
                        text="Cancel"
                        styleName="Close"
                        onPressButton={() => goBack()}
                        theme={{marginTop: 10, width: "48%", borderRadius: 5}}
                    />
                </View>
                
            </View>
            
        </KeyboardAvoidingView>
        <Loading theme={theme} message="Connecting..." isLoading={isLoading} />
        </>
    );
};

export default Registration;

const style = StyleSheet.create({
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    elevation: {
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    componentContainer: {
        display:"flex",
        justifyContent: "center",
        width: "90%",
    },
    titleContainer: {
        padding: 20,
    },
    title: {
        fontSize: 26
    },
    inputs: {
        marginTop: 20,
    },
    appTitleContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    appTitle: {
        fontSize: 38,
        fontWeight: "bold"
    },
    buttonContainer: {
        display: "flex",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
    }
});