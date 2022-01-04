import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { setToken } from "../api/token";

export const doLogin = async ({ log, pwd }) => {
    if (pwd === "password" && log === "admin" ){
        setToken(log);
        try {
            AsyncStorage.setItem("@user", log);
        } catch (e) {
            console.error("user not set");
        }
        return true;
    }
    return false;
}

export const getUser = async () => {
    try {
        const user = await AsyncStorage.getItem("@user");
        if( user && user !== 'undefined' && user !== ''){
            return user;
        }
    } catch(e){
        return null;
    }
}