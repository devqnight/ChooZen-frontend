import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icons from '../components/icons/Icons';
import tabBarStyles from '../theme/tab_bar_styles';
import Profile from '../screens/Profile';
import { UserContext } from '../api/UserContext';
import { AuthContext } from '../api/AuthContext';
import { useContext } from 'react/cjs/react.development';
import { isAuthenticated } from '../api/User';

const Tab = createBottomTabNavigator();

export const Tabs = () => {


    const { auth, setAuth} = useContext(AuthContext);
    const {user, setUser} = useContext(UserContext);

    useEffect(async () => {
        const res = await isAuthenticated({token: auth.token, username: auth.user});

        setUser({
            id: res.id,
            first_name: res.first_name,
            last_name: res.last_name,
            email: res.email,
            birthdate: res.birthdate,
            date_joined: res.date_joined,
            is_superuser: res.is_superuser,
            is_staff: res.is_staff,
            is_active: res.is_active
        });
    },[]);

    return (
        <Tab.Navigator
            //tabBarOptions={{showLabel: false}}
            screenOptions={{
                tabBarStyle: tabBarStyles.bar,
            },
            ({ route }) => ({
                tabBarIcon: ({focused, color}) => {
                    let iconName;
                    if( route.name === 'Home' ){
                        iconName = focused ? "home" : "home-outline";
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
            })}
        >
            <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
            <Tab.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
        </Tab.Navigator>
    );
}