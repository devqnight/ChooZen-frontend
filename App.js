import React from 'react';
import { StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider, useSelector } from 'react-redux';
import rootReducer from './src/reducers';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SplashScreen } from './src/screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabsStack from './src/stacks/TabsStack';
import AuthStack from './src/stacks/AuthStack';

const Stack = createNativeStackNavigator();

const App = () => {
    const auth = useSelector((state) => state.auth );

    if(auth.isLoading)
        return <SplashScreen />;
    
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


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

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