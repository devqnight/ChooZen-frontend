import { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkToken } from './Authentication';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuthState] = useState({
        token: null,
        user: null,
        isLoading: true
    });

    const getAuthState = async () => {
        try {
            const authDataString = await AsyncStorage.getItem("auth");
            const authData = JSON.parse(authDataString || {});

            //checkToken({ token: authData.token}).then((response) => {
            //    console.log("---> token validated : "+ response);
            //    setAuthState({
            //        token: response,
            //        user: authData.user,
            //        isLoading: false
            //    });
            //    console.log(auth.isLoading);
            //});
            
            const response = await checkToken({token: authData.token});
            if(response){
                console.log("---> token validated : "+ await response.token);
                setAuthState({
                    token: await response.token,
                    user: authData.user,
                    isLoading: false
                });
                console.log(auth.isLoading);
            } else {
                throw new Error("failed to validate token");
            }
        } catch (err){
            console.error(err);
            setAuthState({
                token: null,
                user: null,
                isLoading: false
            });
        }
        

    };

    const setAuth = async (auth) => {
        try {
            await AsyncStorage.setItem("auth", JSON.stringify(auth));
            setAuthState(auth);
        } catch (error){
            Promise.reject(error);
        }
    }

    useEffect(() => {
        getAuthState();
    }, []);


    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

//const types = {
//    SIGN_IN: 'SIGN_IN',
//    SIGN_OUT: 'SIGN_OUT',
//    RESTORE_TOKEN: 'RESTORE_TOKEN'
//}
//
//const actionCreators = {
//    sign_in: (auth) => ({ type: types.SIGN_IN, payload: t }),
//}
//
//const initialState = {
//    isLoading: true,
//    isSignout: false,
//    userToken: null
//}

export { AuthContext, AuthProvider };