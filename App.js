import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { AuthContext, AuthProvider } from './api/AuthContext';
import { UserProvider } from './api/UserContext';
import { AuthStack } from './navigation/AuthStack';
import { Tabs } from './navigation/Tabs';
import { SplashScreen } from './screens/SplashScreen';

 
const Stack = createNativeStackNavigator();

function App() {

  const { auth } = useContext(AuthContext);
 
  if( auth.isLoading ){
    return <SplashScreen />;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.token ? (
          <Stack.Screen name="Tabs"  options={{headerShown: false}} component={Tabs} />
        ) : (
          <Stack.Screen name="AuthStack" options={{headerShown: false}} component={AuthStack} />
        )}
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
        <UserProvider>
            <StatusBar 
                      animated={true}
                      backgroundColor="orchid"
                      //hidden={true}
                  />
            <App />
        </UserProvider>
    </AuthProvider>
  );
};
