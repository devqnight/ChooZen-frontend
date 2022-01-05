import AsyncStorage from "@react-native-async-storage/async-storage";
import { setToken, expireToken } from "../api/token";

export const doLogin = async ({ log, pwd }) => {
    if (pwd === "password" && log === "admin" ){
        setToken({token_value: log});
        try {
            await AsyncStorage.setItem("@user", JSON.stringify(log));
            return true
        } catch (e) {
            console.error(e);
            console.error("user not set");
            return false
        }
    }
    return false;
}

export const getUser = async () => {
    try {
        const user = await AsyncStorage.getItem("@user");
        if( user && user !== 'undefined' && user !== ''){
            return JSON.parse(user);
        }
    } catch(e){
        return null;
    }
}

export const logOut = async () => { 
    try {
        await AsyncStorage.removeItem("@user");
        await expireToken();
        return true;
    } catch(e){
        console.error(e);
        return false;
    }
}