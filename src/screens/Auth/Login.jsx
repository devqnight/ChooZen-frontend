import React from "react";
import { ScrollView, View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";
import { checkAuthentication } from "../../actions/user.actions";
import { useNavigation } from '@react-navigation/native';

import { login } from "../../actions/auth.actions";

const Login = () => {
    const nav = useNavigation();

    const dispatch = useDispatch();

    const doLogin = async () => {
        await dispatch(login("night4dead", "testpassword123456789&"));
        const auth = store.getState().auth;
        await dispatch(checkAuthentication(auth.token, auth.login));
    };

    const goRegister = () => {
        nav.navigate('Registration')
    }

    return (
        <ScrollView >
            <Text>Login</Text>
            <Button title="do Login" onPress={() => doLogin()} />
            <Button title="register" onPress={() => goRegister()} />
        </ScrollView>
    );
};

export default Login;