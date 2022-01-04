import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';

const Tab = createBottomTabNavigator();

export const Tabs = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" options={{headerShown: false}} component={Home} />
        </Tab.Navigator>
    );
}