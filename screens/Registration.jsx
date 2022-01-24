import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, ScrollView, Platform } from 'react-native';

import InputSection from '../containers/InputSection';
import WideButton from '../components/buttons/WideButton';

import { IdentitySection } from '../containers/IdentitySection';

import screenStyles from '../theme/screens_styles';
import { signUp } from '../api/Authentication';
import { formatDate } from '../utils/tools';

import { useContext } from "react"
import { AuthContext } from "../api/AuthContext"
 
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

    const createAccount = async () => {
        //console.log("\n\ncreating account\n");

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
            console.error(e);
        });
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
            <ScrollView id="registration" style={ [screenStyles.loginInputs, {height: "110%"}] }>
                
                <View id="textInputs" style={ screenStyles.loginInputsText }>

                    <IdentitySection 
                        firstname={ firstname }
                        lastname={ lastname }
                        birthdate={ birthdate }
                        onChangeFirstname={ onChangeFirstname }
                        onChangeLastname={ onChangeLastname }
                        onChangeDate={ onChangeDate }
                    />

                    <InputSection 
                        text={ email } 
                        inputTitle="Email" 
                        placeHolder="email..." 
                        onChangeInput={ onChangeEmail } 
                        password={ false } 
                    />

                    <InputSection 
                        text={ login } 
                        inputTitle="Login" 
                        placeHolder="login..." 
                        onChangeInput={ onChangeLogin } 
                        password={ false } 
                    />

                    <InputSection 
                        text={ password } 
                        inputTitle="Password" 
                        placeHolder="password..." 
                        onChangeInput={ onChangePassword } 
                        password={ true } 
                    />

                    <InputSection 
                        text={ confirmPassword } 
                        inputTitle="Confirm password" 
                        placeHolder="confirm password..." 
                        onChangeInput={ onChangeConfirmPassword } 
                        password={ true } 
                    />
                    
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