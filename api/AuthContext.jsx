import { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkToken } from './Tokens';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuthState] = useState({
        token: null,
        user: null,
        isLoading: true,
        id: null,
        first_name: null,
        last_name: null,
        email: null,
        birthdate: null,
        date_joined: null,
        is_superuser: false,
        is_staff: false,
        is_active:false
    });

    const getAuthState = async () => {
        try{
            const authDataString = await AsyncStorage.getItem("auth");
            const authData = JSON.parse(authDataString || {});
            await checkToken({token: authData.token, username: authData.user})
            .then(response => {
                if(response.authenticated){
                    setAuthState({
                        token: authData.token,
                        user: response.username,
                        isLoading: false,
                        id: response.id,
                        first_name: response.first_name,
                        last_name: response.last_name,
                        email: response.email,
                        birthdate: response.birthdate,
                        date_joined: response.date_joined,
                        is_superuser: response.is_superuser,
                        is_staff: response.is_staff,
                        is_active: response.is_active
                    });
                } else {
                    throw new Error("token not validated");
                }
            });
        } catch(err){
            setAuthState({
                token: null,
                user: null,
                isLoading: false,
                id: null,
                first_name: null,
                last_name: null,
                email: null,
                birthdate: null,
                date_joined: null,
                is_superuser: false,
                is_staff: false,
                is_active:false
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