import React, { useState } from 'react';
import { Text, View } from "react-native";

import WideButton from '../components/buttons/WideButton';

import screenStyles from '../theme/screens_styles';

export default function Home({ user, onLogout }) {

    const logout = () => {
        console.log("logging out...")
        onLogout({ logged: false, login: ""});
    }

    return (
        <View style={ screenStyles.home }>
            <Text style={ screenStyles.homeTitle }> Hello { user } ! </Text>
            <View style={ screenStyles.homeLogout }>
                <WideButton onPressButton={ () => { logout(); }} text="Logout" styleName="Close" />
            </View>
        </View>
    );
}