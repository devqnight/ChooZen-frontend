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

    const [errorLogin, setErrorLogin] = useState(false);
    const [errorPass, setErrorPass] = useState(false);

    const [errorTextLogin, setErrorTextLogin] = useState("");
    const [errorTextPass, setErrorTextPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

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

    const checkInputs = () => {
        if(!login){
            setErrorLogin(true);
            setErrorTextLogin("Login is empty !");
        }
        if(!password){
            setErrorPass(true);
            setErrorTextPass("Password is empty !");
        }
        return !(errorLogin || errorPass);
    }

    const resetErrors = () => {
        setErrorLogin(false);
        setErrorTextLogin("");
        setErrorPass(false);
        setErrorTextPass("");
    }

    const validateLogin = async () => {
        resetErrors();
        signIn({username: login, password: password})
        .then(result => {
            if(result !== undefined) {
                onLoginSuccess();
                const token = result;
                setAuth({
                    token: token,
                    user: login,
                    isLoading: false
                });
            }
        })
        .catch(e => {
            e.then(error => {
                if(error["password"]){
                    setErrorTextPass(error["password"][0]);
                    setErrorPass(true);
                } else{
                    setErrorMessage(error.non_field_errors[0]);
                    onLoginFail();
                }
            })
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

                    <InputSection text={login} inputTitle="Login" placeHolder="login..." onChangeInput={ onChangeLogin } password={ false } error={ errorLogin } errorText={ errorTextLogin }/>
                    
                    <InputSection text={password} inputTitle="Password" placeHolder="password..." onChangeInput={ onChangePwd } password={ true } error={ errorPass } errorText={ errorTextPass }/>

                </View>

                { loginFailed && <Text style={ screenStyles.loginErrorText }> {errorMessage} </Text> }

                
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
