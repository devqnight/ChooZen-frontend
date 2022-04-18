import React from "react";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth.actions";

import Header from "../../containers/common/Header.container";

const Profile = () => {
    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const doLogout = () => {
        dispatch(logout(auth.token));
    }

    return (
        <View>
            <Header title="Profile" onTouch={() => doLogout()} />
            <Text>Profile</Text>
        </View>
    );
};

export default Profile;