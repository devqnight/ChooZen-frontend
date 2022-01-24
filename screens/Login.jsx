import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import InputSection from '../containers/InputSection';
import WideButton from '../components/buttons/WideButton';

import { signIn } from '../api/Authentication';

import screenStyles from "../theme/screens_styles";
import { useNavigation } from '@react-navigation/native';

import { useContext } from "react"
import { AuthContext } from "../api/AuthContext"
import { NetworkContext } from '../api/NetworkContext';


export default function Login() {

    const { auth, setAuth } = useContext(AuthContext);
    const { network } = useContext(NetworkContext);

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
        //console.log("\n\nsigning in\n");
        signIn({username: login, password: password})
            .then(result => {
                if(result !== undefined) {
                    onLoginSuccess();
                    const token = result;
                    //console.log("---> token : " + token + "\n");
                    setAuth({
                        token: token,
                        user: login,
                        isLoading: false
                    });
                } else {
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
        <ScrollView style={ screenStyles.loginScreen }>
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
        </ScrollView>
    );
}
