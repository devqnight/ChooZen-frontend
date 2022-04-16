import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, Text, Button } from 'react-native';
import { useDispatch } from "react-redux";
import { store } from "../../store";
import { register } from "../../actions/auth.actions";

const Registration = () => {
    const nav = useNavigation();

    const dispatch = useDispatch();

    const doRegister = async () => {
        await dispatch(register());
        const auth = store.getState().auth;
        await dispatch(checkAuthentication(auth.token, auth.login));
    }


    const goBack = () => {
        nav.navigate('Login');
    }

    return (
        <ScrollView >
            <Text>Register</Text>
            <Button title="Cancel" onPress={() => goBack()}/>
        </ScrollView>
    );
};

export default Registration;