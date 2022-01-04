import React, { useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Login } from "./Login";
import { Tabs } from './Tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Main() {



    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions= {{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
                <Stack.Screen name="Tabs"  options={{headerShown: false}} component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
        //<View style={styles.container}>
        //    { !login && <Login onLogin={ onChangeLogin } /> }
        //    { login && <Home user={user} onLogout={ onChangeLogin } /> }
        //</View>
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
