import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToken = async (token_value) => {
    try {
        await AsyncStorage.setItem("@auth_token", JSON.stringify(token_value));
        return token_value;
    } catch(e){
        console.error(e);
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

export const expireToken = async () => {
    try {
        await AsyncStorage.removeItem("@auth_token");
        return true;
    } catch(e) {
        console.error(e);
        return false;
    }
}