import React, { useEffect, useState } from "react";
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

import Home from "../screens/App/Home";
import Groups from "../screens/App/Groups";
import Profile from "../screens/App/Profile";
import Next from "../screens/App/Next";
import { Icon } from "../components/icons/Icon.component";
import { TouchableIcon } from "../components/icons/TouchableIcon.component";
import { ModalWithHeader } from "../containers/common/ModalWithHeader.container";
import { MovieSearch } from "../containers/movies/MovieSearch.container";

const Tabs = createBottomTabNavigator();

const TabsStack = () => {
    const theme = useSelector((state) => state.theme);
    const group = useSelector((state) => state.data.groups.active);
    const user = useSelector((state) => state.user);
    const [visible, setVisible] = useState(false);

    const onRequestClose = () => {
        setVisible(false);
    }

    return (
        <>
            <Tabs.Navigator 
                tabBar={(props) => 
                    <TabBar {...props} 
                        theme={theme}
                        setVisible={(value) => setVisible(value)} 
                        group={!!group}
                    />
                }
            >
                <Tabs.Screen name="Home" options={{headerShown: false}} component={Home}/>
                <Tabs.Screen name="Next" options={{headerShown: false}} component={Next}/>
                <Tabs.Screen name="Groups" options={{headerShown: false}} component={Groups}/>
                <Tabs.Screen name="Profile" options={{headerShown: false}} component={Profile}/>
            </Tabs.Navigator>
            {group && 
                <ModalWithHeader
                    setVisible={setVisible}
                    visible={visible}
                    theme={theme}
                    content={
                        <MovieSearch 
                            user={user}
                            theme={theme}
                            close={onRequestClose}
                            group={group}
                            closeAll={() => {onRequestClose();}}
                        />
                    }
                />
            }
        </>
    );
}

export default TabsStack;

const getIconName = (route, focused) => {
    switch (route.name) {
        case 'Groups':
            return focused ? "account-group" : "account-group-outline";
        case 'Profile':
            return focused ? "account-circle" : "account-circle-outline";
        case 'Next':
            return focused ? "movie" : "movie-outline";
        case 'Add':
            return "plus";
        default:
            return focused ? "home" : "home-outline";
    }
}

const BottomIcon = ({iconName, color}) => {
    return (
        <Icon iconName={ iconName } color={color} height={32} />
    );
}

const TabBar = ({state, descriptors, navigation, theme, setVisible, group}) => {
    return (
        <View
            style={[style.bar]}
        >
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const { options } = descriptors[route.key];

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key
                    });

                    if(!isFocused && !event.defaultPrevented)
                        navigation.navigate(route.name);
                }
                
                const color = isFocused ? theme.bar.activeTint : theme.bar.inactiveTint;
                const backgroundColor = isFocused ? theme.bar.activeBackground : theme.bar.inactiveBackground;
                return (
                    <TouchableOpacity 
                        key={index}
                        onPress={onPress}
                        style={[style.item, {backgroundColor: backgroundColor}]}
                    >
                        <BottomIcon 
                            iconName={getIconName(route, isFocused)}
                            color={color}
                        />
                    </TouchableOpacity>
                );
            })}
            {group && <TouchableIcon 
                height={32} 
                iconName="magnify" //movie-search-outline //plus
                color="white"
                style={{...style.addButton, backgroundColor: theme.bar.activeBackground}}
                onTouch={() => setVisible(true)}
            />}
        </View>
    );
}

const style = StyleSheet.create({
    bar: {

        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 45
    },
    item: {
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
        height: "100%"
    },
    addButton: {
        position: "absolute",
        left: "43%",
        bottom: 20,
        height: 55,
        width: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 90,
        elevation: 4
    }
});