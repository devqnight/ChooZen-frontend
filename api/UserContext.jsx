import { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "./AuthContext";

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
            const csrf = await getCSRF();

            const form = new FormData();
            form.append('token',auth.token);
            form.append('username',auth.user);

            await fetch(
                "https://bique.familyds.com:8001/api-choozen-auth/is_authenticated/",
                {
                    method: 'POST',
                    headers:{
                        "X-CSRFToken": csrf
                    },
                    body: form
                }
            )
            .then(response => {
                return handleError(response).json();
            })
            .then(response => {
                console.log(respone);
                return response;
            }).then(result => {
                if(result.authenticated){
                    setUserState({
                        id: result.id,
                        first_name: result.first_name,
                        last_name: result.last_name,
                        email: result.email,
                        birthdate: result.birthdate,
                        date_joined: result.date_joined,
                        is_superuser: result.is_superuser,
                        is_staff: result.is_staff,
                        is_active: result.is_active
                    });
                } else {
                    throw new Error("not authenticated");
                }
            })
        } catch(err){
            setUserState({
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