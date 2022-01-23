import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import InputSection from '../containers/InputSection';
import WideButton from '../components/buttons/WideButton';
import DateSection from '../containers/DateSection';

import screenStyles from '../theme/screens_styles';
import { signUp } from '../api/Authentication';
import { formatDate } from '../utils/tools';

import { useContext } from "react"
import { AuthContext } from "../api/AuthContext"
import { NetworkContext } from '../api/NetworkContext';
 
export const Registration = (props) => {

    const { auth, setAuth } = useContext(AuthContext);
    const { network } = useContext(NetworkContext);

    const navigation = useNavigation();

    const [login, setLogin] = useState("");
    const [password, setPwd] = useState("");
    const [confirmPassword, setConfirmPwd] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState(new Date());

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

    const createAccount = async () => {
        //console.log("\n\ncreating account\n");

        await signUp({
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
        <View>
            <View id="header" style={ screenStyles.registerHeader }>
                <Text>Registration</Text>
            </View>
            <View id="registration" style={ screenStyles.loginInputs }>
                <View id="textInputs" style={ screenStyles.loginInputsText }>
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

                    <DateSection
                        inputTitle="Birthdate" 
                        date={birthdate} 
                        onChangeDate={onChangeDate} 
                    />
                    
                </View>
                

            </View>
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
        </View>
    );
};