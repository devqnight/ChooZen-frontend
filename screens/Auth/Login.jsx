import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import InputSection from '../../containers/common/InputSection';
import WideButton from '../../components/buttons/WideButton';

import { signIn } from '../../api/Authentication';

import screenStyles from "../../theme/screens_styles";
import { useNavigation } from '@react-navigation/native';

import { useContext } from "react"
import { AuthContext } from "../../api/AuthContext";
import { UserContext } from '../../api/UserContext';
import { isAuthenticated } from '../../api/User';
import { checkToken } from '../../api/Tokens';


export default function Login() {

    const { auth, setAuth } = useContext(AuthContext);
    const { user, setUser } = useContext(UserContext);

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
        const username = login;
        signIn({username: login, password: password})
        .then(async result => {
            if(result !== undefined) {
                onLoginSuccess();
                const token = result;
                await checkToken({token: token, username: username})
                .then(res => {
                    setAuth({
                        token: token,
                        user: username,
                        isLoading: false,
                        id: res.id,
                        first_name: res.first_name,
                        last_name: res.last_name,
                        email: res.email,
                        birthdate: res.birthdate,
                        date_joined: res.date_joined,
                        is_superuser: res.is_superuser,
                        is_staff: res.is_staff,
                        is_active: res.is_active
                    });
                })
                .catch(error => {
                    console.error(error);
                    setAuth({
                        token: token,
                        user: login,
                        isLoading: false,
                        id: null,
                        first_name: null,
                        last_name: null,
                        email: null,
                        birthdate: null,
                        date_joined: null,
                        is_superuser: false,
                        is_staff: false,
                        is_active: false
                    })
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

            </View>

            <View id="inputs" style={ screenStyles.loginInputs }>

                <Text id="loginTitle" style={ screenStyles.loginTitle }> Login </Text>

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
