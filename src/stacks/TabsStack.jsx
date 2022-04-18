import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import tabBarStyles from '../themes/tab_bar_styles';
import { useSelector } from "react-redux";

import Home from "../screens/App/Home";
import Groups from "../screens/App/Groups";
import Profile from "../screens/App/Profile";
import { Icon } from "../components/icons/Icon.component";

const Tabs = createBottomTabNavigator();

const getIconName = (route, focused) => {
    switch (route.name) {
        case 'Groups':
            return focused ? "account-group" : "account-group-outline";
        case 'Profile':
            return focused ? "account-circle" : "account-circle-outline";
        default:
            return focused ? "home" : "home-outline";
    }
}

const TabsStack = () => {
    const theme = useSelector((state) => state.theme);

    // ----------
    //  Screen options not applied if used as a list, forced to used as object, despite error warnings
    // ----------
    //const options = [
    //    { tabBarStyle: tabBarStyles.bar },
    //    ({ route }) => ({
    //        tabBarIcon: ({focused, color}) => {
    //            let iconName = getIconName(route, focused);
    //            return <Icon iconName={ iconName } color={color} height={32} />
    //        },
    //        tabBarActiveTintColor: theme.bar.activeTint,
    //        tabBarInactiveTintColor: theme.bar.inactiveTint,
    //        tabBarActiveBackgroundColor: theme.bar.activeBackground,
    //        tabBarInactiveBackgroundColor: theme.bar.inactiveBackground,
    //        tabBarShowLabel: false
    //    })
    //];


    return (
        <>
            <Tabs.Navigator screenOptions={
                { tabBarStyle: tabBarStyles.bar },
                ({ route }) => ({
                    tabBarIcon: ({focused, color}) => {
                        let iconName = getIconName(route, focused);
                        return <Icon iconName={ iconName } color={color} height={32} />
                    },
                    tabBarActiveTintColor: theme.bar.activeTint,
                    tabBarInactiveTintColor: theme.bar.inactiveTint,
                    tabBarActiveBackgroundColor: theme.bar.activeBackground,
                    tabBarInactiveBackgroundColor: theme.bar.inactiveBackground,
                    tabBarShowLabel: false
                })}
            >
                <Tabs.Screen name="Home" options={{headerShown: false}} component={Home}/>
                <Tabs.Screen name="Groups" options={{headerShown: false}} component={Groups}/>
                <Tabs.Screen name="Profile" options={{headerShown: false}} component={Profile}/>
            </Tabs.Navigator>
        </>
    );
}

export default TabsStack;