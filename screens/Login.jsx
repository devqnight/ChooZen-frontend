import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import InputSection from '../containers/InputSection';
import WideButton from '../components/buttons/WideButton';

import { doLogin } from "../utils/deprecated/auth";
import { signIn } from '../api/Authentication';

import screenStyles from "../theme/screens_styles";
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../utils/deprecated/token';

import { useContext } from "react"
import { AuthContext } from "../api/AuthContext"


export default function Login() {

    const { auth, setAuth } = useContext(AuthContext);

    const navigation = useNavigation();

    const [login, setLogin] = useState("");
    const [password, setPwd] = useState("");

    const onChangeLogin = (string) => {
        setLogin(string);
    }

    const onChangePwd = (string) => {
        setPwd(string);
    }

    const [loginFailed, setLoginFail] = useState(false);

    const onLoginFail = () => {
        setLoginFail(true);
    }

    const onLoginSuccess = () => {
        setLoginFail(false);
    }

    const validateLogin = async () => {
        //doLogin({log:login, pwd: password})
        //    .then((result) => {
        //        if(result){
        //            onLoginSuccess();
//
        //        } else {
        //            onLoginFail();
        //        }
        //    })
        //    .catch((e) => {
        //        console.error(e);
        //    })
        signIn({email: login, password: password})
            .then((result) => {
                if(result) {
                    const token = login;
                    setAuth({
                        token: token,
                        user: login,
                        isLoading: false
                    });
                }
                if(!result){
                    onLoginFail();
                }
            })
            .catch((e) => {
                console.error(e);
            });

    }

    const goToRegister = () => {
        navigation.navigate('Registration');
    }

    return (
        <View style={ screenStyles.loginScreen }>
            <View id="header" style={ screenStyles.loginHeader }>
                <Text id="loginAppTitle" style={ screenStyles.loginAppTitle }> ChooZen </Text>

                <Text id="loginTitle" style={ screenStyles.loginTitle }> Login </Text>
            </View>

            <View id="inputs" style={ screenStyles.loginInputs }>
                <View id="textInputs" style={ screenStyles.loginInputsText }>

                    <InputSection text={login} inputTitle="Login" placeHolder="login..." onChangeInput={ onChangeLogin } password={ false } />
                    
                    <InputSection text={password} inputTitle="Password" placeHolder="password..." onChangeInput={ onChangePwd } password={ true } />

                </View>

                { loginFailed && <Text style={ screenStyles.loginErrorText }> Error on login ... </Text> }

                
            </View>
            <View id="buttons" style={ screenStyles.loginInputsButtons }>
                    <View style={ screenStyles.loginInputsButton }>
                        <WideButton onPressButton={ () => { validateLogin(); }} text="Login" styleName="Save" />
                    </View>
                    <View style={ screenStyles.loginInputsButton }>
                        <WideButton onPressButton={ () => { goToRegister(); }} text="Register" styleName="" />
                    </View>
                    
            </View>
        </View>
    );
}
