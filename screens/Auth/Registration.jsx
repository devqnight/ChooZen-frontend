import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, ScrollView, Platform } from 'react-native';

import InputSection from '../../containers/common/InputSection';
import WideButton from '../../components/buttons/WideButton';

import { IdentitySection } from '../../containers/common/IdentitySection';

import screenStyles from '../../theme/screens_styles';
import { signUp } from '../../api/Authentication';
import { formatDate } from '../../utils/tools';

import { useContext } from "react"
import { AuthContext } from "../../api/AuthContext"
 
export const Registration = (props) => {

    const { auth, setAuth } = useContext(AuthContext);

    const navigation = useNavigation();

    const [login, setLogin] = useState("");
    const [password, setPwd] = useState("");
    const [confirmPassword, setConfirmPwd] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState(new Date());
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorTextEmail, setErrorTextEmail] = useState("");

    const [errorUsername, setErrorUsername] = useState(false);
    const [errorTextUsername, setErrorTextUsername] = useState("");

    const [errorPassword1, setErrorPassword1] = useState(false);
    const [errorTextPassword1, setErrorTextPassword1] = useState("");

    const [errorPassword2, setErrorPassword2] = useState(false);
    const [errorTextPassword2, setErrorTextPassword2] = useState("");

    const [generalError, setGeneralError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [errorAge, setErrorAge] = useState(false);
    const [errorTextAge, setErrorTextAge] = useState("");

    const onChangeLogin = (string) => {
        setLogin(string);
    }
    const onChangeEmail = (string) => {
        setEmail(string);
    }
    const onChangePassword = (string) => {
        setPwd(string);
    }
    const onChangeConfirmPassword = (string) => {
        setConfirmPwd(string);
    }

    const onChangeDate = (date) => {
        setBirthdate(date);
    }

    const onChangeFirstname = (string) => {
        setFirstname(string);
    }

    const onChangeLastname = (string) => {
        setLastname(string);
    }

    const resetErrors = () => {
        setGeneralError(false);
        setErrorPassword1(false);
        setErrorPassword2(false);
        setErrorUsername(false);
        setErrorEmail(false);
    }

    function getAge(birthDateString) {
        var today = new Date();
        var birthDate = new Date(birthDateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const checkAge = () => {
        return getAge(birthdate.toLocaleDateString()) >= 13;
    }

    const createAccount = async () => {
        //console.log("\n\ncreating account\n");
        resetErrors();
        if(checkAge())
            await signUp({
                firstname: firstname,
                lastname: lastname,
                email: email,
                login: login,
                password1: password,
                password2: confirmPassword,
                birthdate: formatDate(birthdate)
            })
            .then(result => {
                if(result !== undefined) {
                    const token = result;
                    setAuth({
                        token: token,
                        user: login,
                        isLoading: false
                    });
                }
                returnLogin();
            })
            .catch(e => {
                e.then(error => {
                    handleErrors(error);
                })
                .catch(error => {
                    handleErrors(error);
                });
            });
        handleErrorAge();
    }

    const handleErrors = (errors) => {
        if(errors["email"])
            handleErrorEmail(errors["email"]);
        if(errors["username"])
            handleErrorUsername(errors["username"]);
        if(errors["password1"])
            handleErrorPassword1(errors["password1"]);
        if(errors["password2"])
            handleErrorPassword2(errors["password2"]);
        if(errors["non_field_errors"])
            handleGeneralError(errors["non_field_errors"]);
    };

    const getStringFromList = (error) => {
        let string = "";
        for(let msg of error){
            string = string + msg;
        }
        return string;
    }

    const handleErrorEmail = (error) => {
        const errorMsg = getStringFromList(error);
        setErrorTextEmail(errorMsg);
        setErrorEmail(true);
    }

    const handleErrorUsername = (error) => {
        const errorMsg = getStringFromList(error);
        setErrorTextUsername(errorMsg);
        setErrorUsername(true);
    }

    const handleErrorPassword1 = (error) => {
        const errorMsg = getStringFromList(error);
        setErrorTextPassword1(errorMsg);
        setErrorPassword1(true);
    }

    const handleErrorPassword2 = (error) => {
        const errorMsg = getStringFromList(error);
        setErrorTextPassword2(errorMsg);
        setErrorPassword2(true);
    }

    const handleGeneralError = (error) => {
        const errorMsg = getStringFromList(error);
        setErrorMessage(errorMsg);
        setGeneralError(true);
    }

    const handleErrorAge = () => {
        setErrorTextAge("You must be 13 years old at least to make an account");
        setErrorAge(true);
    }

    const returnLogin = () => {
        navigation.navigate("Login");
    }
 
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <View id="header" style={ screenStyles.registerHeader }>
                <Text style={ { color: "#fff", fontSize: 22 } }>Registration</Text>
            </View>
            <ScrollView id="registration" style={ [screenStyles.loginInputs, ] }
                contentContainerStyle={{height: "200%", flexGrow: 1}}>
                
                <View id="textInputs" style={ [screenStyles.loginInputsText] }>

                    <IdentitySection 
                        firstname={ firstname }
                        lastname={ lastname }
                        birthdate={ birthdate }
                        onChangeFirstname={ onChangeFirstname }
                        onChangeLastname={ onChangeLastname }
                        onChangeDate={ onChangeDate }
                    />

                    {errorAge && <Text style={ screenStyles.loginErrorText }>{errorTextAge}</Text>}

                    <InputSection 
                        text={ email } 
                        inputTitle="Email" 
                        placeHolder="email..." 
                        onChangeInput={ onChangeEmail } 
                        password={ false } 
                        error={ errorEmail }
                        errorText={ errorTextEmail }
                    />

                    <InputSection 
                        text={ login } 
                        inputTitle="Login" 
                        placeHolder="login..." 
                        onChangeInput={ onChangeLogin } 
                        password={ false } 
                        error={ errorUsername }
                        errorText={ errorTextUsername }
                    />

                    <InputSection 
                        text={ password } 
                        inputTitle="Password" 
                        placeHolder="password..." 
                        onChangeInput={ onChangePassword } 
                        password={ true } 
                        error={ errorPassword1 }
                        errorText={ errorTextPassword1 }
                    />

                    <InputSection 
                        text={ confirmPassword } 
                        inputTitle="Confirm password" 
                        placeHolder="confirm password..." 
                        onChangeInput={ onChangeConfirmPassword } 
                        password={ true } 
                        error={ errorPassword2 }
                        errorText={ errorTextPassword2 }
                    />
                    { generalError && <Text style={ screenStyles.loginErrorText }> {errorMessage} </Text> }
                </View>
            </ScrollView>
            <View id="buttons" style={ screenStyles.registerInputsButtons }>
                <View style={ screenStyles.registerInputsButton }>
                    <WideButton 
                        onPressButton={ () => { createAccount() } }
                        text="Create"
                        styleName="Save"
                    />
                </View>
                
                <View style={ screenStyles.registerInputsButton }>
                    <WideButton 
                        onPressButton={ () => { returnLogin(); } }
                        text="Cancel"
                        styleName=""
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};