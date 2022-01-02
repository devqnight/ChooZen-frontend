import React, { useState } from 'react';
import { View, Text } from 'react-native';

import InputSection from '../containers/InputSection';
import WideButton from '../components/buttons/WideButton';

import doLogin from "../utils/auth";
 
import screenStyles from "../theme/screens_styles";


export default function Login({ onLogin }) {

    const [login, setLogin] = useState("");
    const [password, setPwd] = useState("");

    const onChangeLogin = (string) => {
        console.log(string);
        setLogin(string);
    }

    const onChangePwd = (string) => {
        console.log(string);
        setPwd(string);
    }

    const [loginFailed, setLoginFail] = useState(false);

    const onLoginFail = () => {
        setLoginFail(true);
    }

    const onLoginSuccess = () => {
        setLoginFail(false);
    }

    const validateLogin = () => {
        if( doLogin({ log: login, pwd: password } ) ){
            console.log("returning to home ...");
            onLoginSuccess(true);
            onLogin({logged: true, login: login });
        } else {
            onLoginFail();
        }
        onChangeLogin("");
        onChangePwd("");
    };

    return (
        <View style={ screenStyles.loginScreen }>
            <View id="header" style={ screenStyles.loginHeader }>
                <Text id="loginAppTitle" style={ screenStyles.loginAppTitle }> ChooZen </Text>

                <Text id="loginTitle" style={ screenStyles.loginTitle }> Login </Text>
            </View>

            <View id="inputs" style={ screenStyles.loginInputs }>
                <View id="textInputs" style={ screenStyles.loginInputsText }>

                    <InputSection text={login} inputTitle="Login" placeHolder="login..." onChangeInput={ onChangeLogin } />
                    
                    <InputSection text={password} inputTitle="Password" placeHolder="password..." onChangeInput={ onChangePwd } />

                </View>

                <View id="buttons" style={ screenStyles.loginInputsButtons }>

                    <WideButton onPressButton={ () => { validateLogin(); }} text="Login" styleName="Save" />

                </View>
                { loginFailed && <Text> Error on login ... </Text> }
            </View>
        </View>
    );
}
