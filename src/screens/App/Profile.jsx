import React from "react";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth.actions";

const Profile = () => {
    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const doLogout = () => {
        dispatch(logout(auth.token));
    }

    return (
        <View>
            <Text>Profile</Text>
            <Button title="Logout" onPress={() => doLogout()}></Button>
        </View>
    );
};

export default Profile;