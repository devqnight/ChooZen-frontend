import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Text, View } from "react-native";
import { AuthContext } from '../api/AuthContext';

import WideButton from '../components/buttons/WideButton';

import screenStyles from '../theme/screens_styles';

export default function Profile() {

    const { auth, setAuth } = useContext(AuthContext);

    const [login, setLogin] = useState(auth.user);

    const logout = () => {
        setAuth({
            token: null,
            user: null,
            isLoading: false
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