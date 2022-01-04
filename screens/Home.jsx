import React, { useState } from 'react';
import { Text, View } from "react-native";

import WideButton from '../components/buttons/WideButton';

import screenStyles from '../theme/screens_styles';

export default function Home() {

    const logout = () => {
    }

    return (
        <View style={ screenStyles.home }>
            <Text style={ screenStyles.homeTitle }> Hello ! </Text>
            <View style={ screenStyles.homeLogout }>
                <WideButton onPressButton={ () => { logout(); }} text="Logout" styleName="Close" />
            </View>
        </View>
    );
}