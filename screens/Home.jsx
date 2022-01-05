import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from "react-native";

import screenStyles from '../theme/screens_styles';

import { getUser, logOut } from '../utils/auth';

export default function Home() {

    const navigation = useNavigation();

    const [login, setLogin] = useState('');


    getUser().
        then((result) => {
            setLogin(result);
        })
        .catch((e) => {
            console.error(e);
        });

    return (
        <View style={ screenStyles.home }>
            <Text style={ screenStyles.homeTitle }> Hello { login } ! </Text>
            <View style={ screenStyles.homeLogout }>
                <Text>Movies : </Text>
            </View>
        </View>
    );
}