import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from "react-native";
import Login from "./Login";
import Home from './Home';

export default function Main() {

    const [login, setLogin] = useState(false);

    const [user, setUser] = useState("");

    const onChangeLogin = ({logged, login}) => {
        setLogin(logged);
        if( logged ) {
            setUser(login);
            console.log("user " + user + " logged in...");
        } else 
            setUser("");
    }


    return (
        <View style={styles.container}>
            { !login && <Login onLogin={ onChangeLogin } /> }
            { login && <Home user={user} onLogout={ onChangeLogin } /> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
