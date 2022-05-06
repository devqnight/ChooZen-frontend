import React, { useCallback, useState } from "react";
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import { store } from "../../store";

import { checkAuthentication } from "../../actions/user.actions";
import { login } from "../../actions/auth.actions";

import { Input } from "../../components/inputs/Input.component";
import { ErrorMsg } from "../../components/ErrorMsg.component";
import { CustomButton } from "../../components/buttons/CustomButton.component";
import { Loading } from "../Loading";
import { restoreTheme } from "../../actions/theme.actions";

const Login = () => {
    //-----------
    // GLOBAL
    //-----------

    const nav = useNavigation();
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    
    //-------------
    // VARIABLES
    //-------------

    const [loginStr, setLoginStr] = useState(null);
    const [pwdStr, setPwdStr] = useState(null);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    //-------------
    // FUNCTIONS
    //-------------

    const doLogin = async () => {
        setIsLoading(true);
        await dispatch(login(loginStr, pwdStr));
        const auth = store.getState().auth;
        if(auth.err){
            setIsLoading(false);
            let msg = "Error on login";
            if(auth.err.non_field_errors)
                msg = auth.err.non_field_errors[0]
            setErrorMsg(msg);
            setError(true);
        } else {
            dispatch(restoreTheme());
        }        
    };

    const goRegister = () => {
        nav.navigate('Registration')
    }


    return (
        <>
        <KeyboardAvoidingView 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <View style={style.appTitleContainer}>
                <Text style={[style.appTitle, {color: theme.accentColor}]}>ChooZEN</Text>
            </View>
            <View style={[
                {
                    height: "60%", 
                    flexGrow: 1,
                    borderRadius: 10,
                    margin: 20,
                    alignItems: "center",
                    paddingTop: 20,
                    backgroundColor: "#FFFFFF"
                },
                style.elevation
            ]} >
                <View style={[style.componentContainer, style.titleContainer]}>
                    <Text style={style.title}>Login</Text>
                </View>
                <View style={[style.componentContainer, style.inputs]}>
                    <Input 
                        title="Username/ Email"
                        required={true}
                        value={loginStr}
                        onChangeText={(text) => setLoginStr(text)}
                        style={{backgroundColor: theme.backgroundColor, color: "white"}}
                    />
                    <Input 
                        title="Password"
                        required={true}
                        pwd={true}
                        value={pwdStr}
                        onChangeText={(text) => setPwdStr(text)}
                        style={{backgroundColor: theme.backgroundColor, color: "white"}}
                    />
                </View>
                <ErrorMsg error={error} msg={errorMsg} />
                <View style={[style.componentContainer, style.buttonContainer]}>
                    <CustomButton 
                        text="Log in"
                        onPressButton={() => doLogin()}
                        styleName="Save"
                        theme={{backgroundColor: theme.backgroundColor, marginTop: 10, borderRadius: 5}}
                    />
                    <CustomButton 
                        text="Register"
                        onPressButton={() => goRegister()}
                        theme={{marginTop: 10, borderRadius: 5}}
                    />
                </View>
                
            </View>
            
        </KeyboardAvoidingView>
        <Loading theme={theme} message="Connecting..." isLoading={isLoading} />
        </>
    );
};

export default Login;

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
        alignItems: "center",
        width: "100%",
    }
});