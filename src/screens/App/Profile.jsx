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
                <Field title="Username" content={user.username} theme={theme}/>
                <Field title="Email" content={user.email} theme={theme}/>
                <Field title="First Name" content={user.first_name} theme={theme}/>
                <Field title="Last Name" content={user.last_name} theme={theme}/>
                <Field title="Birthday" content={user.birthdate} theme={theme}/>
                <Field title="Premium account" content={user.is_superuser ? "Yes" : "No"} theme={theme}/>
            </View>
                <Text style={[style.sectionTitle, {color: theme.bar.activeTint, backgroundColor: theme.backgroundColor}]}>Accent Color:</Text>
            <ColorGrid colors={colors} current={theme.accentColor} callback={(color) => doChangeAccent(color)}/>
        </View>
    );
};

export default Profile;

const style = StyleSheet.create({
    sectionTitle: {
        fontSize: 21,
        padding: 10,
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

//<RoundColorButton color={{borderColor: "#D5B0D5", color: "#D5B0D5", backgroundColor: "#D5B0D5"}} onPress={() => doChangeAccent("#D5B0D5")}/>
//<RoundColorButton color={{borderColor: "#7BE7B9", color: "#7BE7B9", backgroundColor: "#7BE7B9"}} onPress={() => doChangeAccent("#7BE7B9")}/>
//<RoundColorButton color={{borderColor: "#83D4FF", color: "#83D4FF", backgroundColor: "#83D4FF"}} onPress={() => doChangeAccent("#83D4FF")}/>
//<RoundColorButton color={{borderColor: "#FFCA52", color: "#FFCA52", backgroundColor: "#FFCA52"}} onPress={() => doChangeAccent("#FFCA52")}/>
//<RoundColorButton color={{borderColor: "#FF7A77", color: "#FF7A77", backgroundColor: "#FF7A77"}} onPress={() => doChangeAccent("#FF7A77")}/>
//<RoundColorButton color={{borderColor: "#B49AEA", color: "#B49AEA", backgroundColor: "#B49AEA"}} onPress={() => doChangeAccent("#B49AEA")}/>
//<RoundColorButton color={{borderColor: "#44A54C", color: "#44A54C", backgroundColor: "#44A54C"}} onPress={() => doChangeAccent("#44A54C")}/>
//<RoundColorButton color={{borderColor: "#579BF4", color: "#579BF4", backgroundColor: "#579BF4"}} onPress={() => doChangeAccent("#579BF4")}/>
//<RoundColorButton color={{borderColor: "#FF9C60", color: "#FF9C60", backgroundColor: "#FF9C60"}} onPress={() => doChangeAccent("#FF9C60")}/>
//<RoundColorButton color={{borderColor: "#ED544E", color: "#ED544E", backgroundColor: "#ED544E"}} onPress={() => doChangeAccent("#ED544E")}/>