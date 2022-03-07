import { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../AuthContext";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [user, setUserState] = useState({
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

    const getUserState = async () => {
        try{
            const resString = await AsyncStorage.getItem("user");
            const res = JSON.parse(resString || {});
            if(res.authenticated){
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
            } else {
                throw new Error("not authenticated");
            }
        } catch(err){
            setUser({
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

    const setUser = async (auth) => {
        try {
            await AsyncStorage.setItem("user", JSON.stringify(user));
            setUserState(auth);
        } catch (error){
            Promise.reject(error);
        }
    }

    useEffect(() => {
        getUserState();
    }, []);


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
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

export { UserContext, UserProvider };