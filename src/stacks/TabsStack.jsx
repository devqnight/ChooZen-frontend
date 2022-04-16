import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import tabBarStyles from '../themes/tab_bar_styles';
import { useSelector } from "react-redux";

import Home from "../screens/App/Home";
import Groups from "../screens/App/Groups";
import Profile from "../screens/App/Profile";

const Tabs = createBottomTabNavigator();

const getIconName = (route, focused) => {
    switch (route.name) {
        case 'Group':
            return focused ? "account-group" : "account-group-outline";
        case 'Profile':
            return focused ? "account-circle" : "account-circle-outline";
        default:
            return focused ? "home" : "home-outline";
    }
}

const TabsStack = () => {
    const theme = useSelector((state) => state.theme);

    const options = [
        { tabBarStyle: tabBarStyles.bar },
        ({ route }) => ({
            tabBarIcon: ({focused, color}) => {
                let iconName = getIconName(route, focused);
                return <Icons iconName={ iconName } height={32} />
            },
            tabBarActiveTintColor: theme.bar.activeTint,
            tabBarInactiveTintColor: theme.bar.inactiveTint,
            tabBarActiveBackgroundColor: theme.bar.activeBackground,
            tabBarInactiveBackgroundColor: theme.bar.inactiveBackground,
            tabBarShowLabel: false
        })
    ];

    return (
        <Tabs.Navigator screenOptions={options}>
            <Tabs.Screen name="Home" options={{headerShown: false}} component={Home}/>
            <Tabs.Screen name="Groups" options={{headerShown: false}} component={Groups}/>
            <Tabs.Screen name="Profile" options={{headerShown: false}} component={Profile}/>
        </Tabs.Navigator>
    );
}

export default TabsStack;