import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import InputSection from '../containers/InputSection';
import WideButton from '../components/buttons/WideButton';

import screenStyles from '../theme/screens_styles';
 
export const Registration = (props) => {

    const navigation = useNavigation();

    const [login, setLogin] = useState("");
    const [password, setPwd] = useState("");
    const [confirmPassword, setConfirmPwd] = useState("");
    const [email, setEmail] = useState("");

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

    const createAccount = () => {
        console.log("creating account");
        returnLogin();
    }

    const returnLogin = () => {
        navigation.navigate("Login");
    }
 
    return (
        <View>
            <View id="header" style={ screenStyles.loginHeader }>
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
        </View>
    );
};