import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from "react-native";
import { AuthContext } from '../api/AuthContext';
import { signOut } from '../api/Authentication';
import { UserContext } from '../api/UserContext';
import { isAuthenticated } from '../api/User';

import WideButton from '../components/buttons/WideButton';

import screenStyles from '../theme/screens_styles';

export default function Profile() {
    const { auth, setAuth } = useContext(AuthContext);
    const {user, setUser} = useContext(UserContext);

    useEffect(async () => {
        const res = await isAuthenticated({token: auth.token, username: auth.user});

        setUser({
            id: res.id,
            first_name: res.first_name,
            last_name: res.last_name,
            email: res.email,
            birthdate: res.birthdate,
            date_joined: res.date_joined,
            is_superuser: res.is_superuser,
            is_staff: res.is_staff,
            is_active: res.is_active
        });
        console.log(user);
    }, []);

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