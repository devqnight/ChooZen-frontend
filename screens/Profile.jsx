import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from "react-native";

import WideButton from '../components/buttons/WideButton';

import screenStyles from '../theme/screens_styles';

import { getUser, logOut } from '../utils/auth';

export default function Profile() {

    const navigation = useNavigation();

    const [login, setLogin] = useState('');


    getUser().
        then((result) => {
            setLogin(result);
        })
        .catch((e) => {
            console.error(e);
        });

    const logout = () => {
        logOut().
            then((result) => {
                if(result){
                    navigation.navigate('Login');
                }
            })
            .catch((e) => {
                console.error(e);
            });
    }

    return (
        <View style={ screenStyles.home }>
            <Text style={ screenStyles.homeTitle }> You are { login } ! </Text>
            <View style={ screenStyles.homeLogout }>
                <WideButton onPressButton={ () => { logout(); }} text="Logout" styleName="Close" />
            </View>
        </View>
    );
}