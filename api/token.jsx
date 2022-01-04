import { AsyncStorage } from "@react-native-async-storage/async-storage";

export const setToken = async (token_value) => {
    try {
        await AsyncStorage.setItem("@auth_token", token_value);
    } catch(e){
        return null;
    }
};

export const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem("@auth_token");
        if( value && value !== 'undefined' && value !== ''){
            return value;
        }
    } catch (e) {
        return null;
    }
}