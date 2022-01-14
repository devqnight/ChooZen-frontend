import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import InputSection from '../containers/InputSection';
import WideButton from '../components/buttons/WideButton';
 
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
 
    return (
        <View>
            <View id="header">
                <Text>Registration</Text>
            </View>
            <View id="registration">
                <View id="textInputs">
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
                <View id="buttons">
                    <WideButton 
                        onPressButton={ () => { console.log("creating account") } }
                        text="Create account"
                        styleName="save"
                    />

                    <WideButton 
                        onPressButton={ () => { console.log("creating account") } }
                        text="Cancel"
                        styleName="close"
                    />
                </View>

            </View>
            <View>

            </View>
        </View>
    );
};