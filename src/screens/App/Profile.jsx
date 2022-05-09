import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { store } from "../../store";

import { logout } from "../../actions/auth.actions";
import { themeSwitch } from "../../actions/theme.actions";
import { Field } from "../../components/Field.component";

import Header from "../../containers/common/Header.container";
import { ColorGrid } from "../../containers/theme/ColorGrid.container";
import { setStorage } from "../../utils/storage.tools";

const Profile = () => {
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const theme = useSelector((state) => state.theme);

    const colors = [
        "#D5B0D5",
        "#7BE7B9",
        "#83D4FF",
        "#FFCA52",
        "#FF7A77",
        "#B49AEA",
        "#44A54C",
        "#579BF4",
        "#FF9C60",
        "#ED544E",
    ];

    const dispatch = useDispatch();

    const doChangeAccent = async (color) => {
        await dispatch(themeSwitch(color));
        const theme = store.getState().theme;
        await setStorage("theme", theme);
    }

    const doLogout = () => {
        dispatch(logout(auth.token));
    }

    return (
        <View style={style.container}>
            <Header title="Profile" onTouch={() => doLogout()} />
                <Text style={[style.sectionTitle, {color: theme.bar.activeTint, backgroundColor: theme.backgroundColor}]}>User:</Text>
            <View style={style.section}>
                <Field title="Username" content={user.username}/>
                <Field title="Email" content={user.email}/>
                <Field title="First Name" content={user.first_name}/>
                <Field title="Last Name" content={user.last_name}/>
                <Field title="Birthday" content={user.birthdate}/>
                <Field title="Premium account" content={user.is_superuser ? "Yes" : "No"} last={true}/>
            </View>
                <Text style={[style.sectionTitle, {color: theme.bar.activeTint, backgroundColor: theme.backgroundColor}]}>Accent Color:</Text>
            <ColorGrid colors={colors} current={theme.accentColor} callback={(color) => doChangeAccent(color)}/>
        </View>
    );
};

export default Profile;

const style = StyleSheet.create({
    sectionTitle: {
        fontSize: 18,
        padding: 8,
        fontWeight: "bold"
    },
    section: {
        backgroundColor: "#EDEDED"
    },
    buttonsColorSection: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        backgroundColor: "#CFCFCF"
    }
});
