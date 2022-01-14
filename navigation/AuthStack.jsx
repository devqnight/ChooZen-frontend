import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Registration } from '../screens/Registration';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export default function AuthStack(){

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
            <Stack.Screen name="Registration" options={{headerShown: false}} component={Registration} />
        </Stack.Navigator>
    );
};