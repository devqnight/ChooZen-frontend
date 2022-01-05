import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import Login from "./Login";
import { Tabs } from '../navigation/Tabs';

import { getToken } from '../api/token';

import { NavigationContainer, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Main() {

    const navigationRef = useNavigationContainerRef();

    const [initRoute, setInitRoute] = useState('');

    useEffect(() => {
        getToken().then((value) => {
            if( value ){
                navigationRef.navigate('Tabs');
            }
        })
        .catch((e) => {
            console.error(e);
        });
    });

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName={initRoute}
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
