import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Group from '../../screens/Group/Group';
import Icons from '../../components/icons/Icons';
import tabBarStyles from '../../theme/tab_bar_styles';
import Profile from '../../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

export const Tabs = () => {

    return (
        <Tab.Navigator
            //tabBarOptions={{showLabel: false}}
            screenOptions={
                {
                    tabBarStyle: tabBarStyles.bar,
                },
                ({ route }) => ({
                    tabBarIcon: ({focused, color}) => {
                        let iconName;
                        if( route.name === 'Home' ){
                            iconName = focused ? "home" : "home-outline";
                        } else if( route.name === 'Group' ){
                            iconName = focused ? "account-group" : "account-group-outline";
                        } else if ( route.name === 'Profile' ){
                            iconName = focused ? "account-circle" : "account-circle-outline";
                        }
                        return <Icons iconName={ iconName } color={ color } height={ 32 } />
                    },
                    tabBarActiveTintColor: "#FFF",
                    tabBarInactiveTintColor: "#f5c2ff",
                    tabBarInactiveBackgroundColor: "orchid",
                    tabBarActiveBackgroundColor: "orchid",
                    tabBarShowLabel: false
                })
            }
        >
            <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
            <Tab.Screen name="Group" options={{ headerShown: false }} component={Group} />
            <Tab.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
        </Tab.Navigator>
    );
}