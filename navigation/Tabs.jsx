import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icons from '../components/icons/Icons';
import tabBarStyles from '../theme/tab_bar_styles';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{showLabel: false}}
            screenOptions={{
                tabBarStyle: tabBarStyles.bar,
                tabBarShowLabel: false,
            },
            ({ route }) => ({
                tabBarIcon: ({focused, color}) => {
                    let iconName;

                    if( route.name === 'Home' ){
                        iconName = focused ? "home" : "home-outline";
                    } else if ( route.name === 'Profile' ){
                        iconName = focused ? "account-circle" : "account-circle-outline";
                    }
                    return <Icons iconName={ iconName } color={ color } />
                },
                tabBarActiveTintColor: "#FFF",
                tabBarInactiveTintColor: "#f5c2ff",
                tabBarInactiveBackgroundColor: "orchid",
                tabBarActiveBackgroundColor: "orchid"
            })}
        >
            <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
            <Tab.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
        </Tab.Navigator>
    );
}