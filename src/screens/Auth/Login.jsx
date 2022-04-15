import React from "react";
import { ScrollView, View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import { login } from "../../actions/auth.actions";

const Login = () => {

    const dispatch = useDispatch();

    const doLogin = () => {
        dispatch(login("night4dead", "testpassword123456789&"));
    };


    return (
        <ScrollView >
            <Text>Login</Text>
            <Button title="do Login" onPress={() => doLogin()}>do Login</Button>
        </ScrollView>
    );
};

export default Login;