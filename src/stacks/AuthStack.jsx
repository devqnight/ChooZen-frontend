import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Auth/Login";
import Registration from "../screens/Auth/Registration";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{headerShown: false}} component={Login}/>
            <Stack.Screen name="Registration" options={{headerShown: false}} component={Registration}/>
        </Stack.Navigator>
    );
};

export default AuthStack;