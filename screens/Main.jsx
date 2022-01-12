import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { Tabs } from '../navigation/Tabs';

import { getToken } from '../api/token';

import { NavigationContainer, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from '../navigation/AuthStack';

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
                <Stack.Screen name="AuthStack" options={{headerShown: false}} component={AuthStack} />
                <Stack.Screen name="Tabs"  options={{headerShown: false}} component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
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
