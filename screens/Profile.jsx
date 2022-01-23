import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Text, View } from "react-native";
import { AuthContext } from '../api/AuthContext';
import { signOut } from '../api/Authentication';
import { NetworkContext } from '../api/NetworkContext';

import WideButton from '../components/buttons/WideButton';

import screenStyles from '../theme/screens_styles';

export default function Profile() {

    const { auth, setAuth } = useContext(AuthContext);
    const { network } = useContext(NetworkContext);

    const [login, setLogin] = useState(auth.user);

    const logout = () => {
        //console.log("\n\nsigning out \n");
        signOut({ token : auth.token })
        .then(response => {
            //console.log("sign out : " + response.detail);
            setAuth({
                token: null,
                user: null,
                isLoading: false
            });
        })
        .catch(err => {
            console.error(err);
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