import React, { useEffect, useState } from 'react';
import { StatusBar, Modal } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SplashScreen } from './src/screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabsStack from './src/stacks/TabsStack';
import AuthStack from './src/stacks/AuthStack';

import { store } from './src/store';
import { logback } from './src/actions/auth.actions';
import { checkAuthentication } from "./src/actions/user.actions";
import { updateGroup } from './src/actions/groups.actions';
import { restoreTheme } from './src/actions/theme.actions';
import { getFromStorage, removeStorage } from './src/utils/storage.tools';

const Stack = createNativeStackNavigator();

const App = () => {
    const auth = useSelector((state) => state.auth );
    const theme = useSelector((state) => state.theme);
    const groups = useSelector((state) => state.data.groups);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        setIsLoading(true);
        await loadAuth(dispatch, groups, user);
        await loadTheme(dispatch);
        setIsLoading(false);
    }, []);
    
    return (
        <>
            {(auth.isLoading || isLoading) && 
                <SplashScreen />
            }
            <StatusBar 
                animated={true}
                backgroundColor={theme.accentColor}
            />
            <NavigationContainer>
                <Stack.Navigator>
                    {auth.token ? 
                        (<Stack.Screen name="TabsStack" options={{headerShown: false}} component={TabsStack}/>)
                        :
                        (<Stack.Screen name="AuthStack" options={{headerShown: false}} component={AuthStack}/>)
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default () => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

const loadTheme = async (dispatch) => {
    try {
        await dispatch(restoreTheme());
    } catch (error) {
        console.warn(error);
    }
}

const loadAuth = async (dispatch, groups, user) => {
    try{
        const authData = await getFromStorage("auth");

        if(authData != null && authData.login && authData.token){
            await dispatch(checkAuthentication(authData.token, authData.login));
            await dispatch(logback(authData.login, authData.token));
        }
    } catch (e) {
        console.warn(e);
    }
}