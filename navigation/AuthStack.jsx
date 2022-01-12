import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Registration } from '../screens/Registration';

const AuthStack = createNativeStackNavigator();

export default function AuthStack(){

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" options={{headerShown: false}} component={Login} />
            <AuthStack.Screen name="Registration" options={{headerShown: false}} component={Registration} />
        </AuthStack.Navigator>
    );
};