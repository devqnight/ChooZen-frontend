import React, { useEffect, useState } from 'react';
import { StatusBar, Modal } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SplashScreen } from './src/screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabsStack from './src/stacks/TabsStack';
import AuthStack from './src/stacks/AuthStack';

import { store } from './src/store';
import { logback } from './src/actions/auth.actions';
import { checkAuthentication } from "./src/actions/user.actions";

const Stack = createNativeStackNavigator();

const App = () => {
    const auth = useSelector((state) => state.auth );
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        setIsLoading(true);
        try{
            const authDataString = await AsyncStorage.getItem("auth");
            const authData = JSON.parse(authDataString);
            if(authData.login && authData.token){
                await dispatch(checkAuthentication(authData.token, authData.login));
                await dispatch(logback(authData.login, authData.token));
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, []);

    if(auth.isLoading || isLoading)
        return <SplashScreen />
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {auth.token ? 
                    (<Stack.Screen name="TabsStack" options={{headerShown: false}} component={TabsStack}/>)
                    :
                    (<Stack.Screen name="AuthStack" options={{headerShown: false}} component={AuthStack}/>)
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => {

    return (
        <Provider store={store}>
            <StatusBar 
                animated={true}
                backgroundColor={store.getState().theme.accentColor}
                //hidden={true}
            />
            <App />
        </Provider>
    );
};