import AsyncStorage from "@react-native-async-storage/async-storage";

const getFromStorage = async (storage) => {
    try {
        const dataString = await AsyncStorage.getItem(storage);
        const data = JSON.parse(dataString);

        return data;
    } catch (err) {
        console.warn(err);
        return null;
    }
}

const setStorage = async (storage, data) => {
    try {
        await AsyncStorage.setItem(storage, JSON.stringify(data));
        return true;
    } catch (err) {
        console.warn(err);
        return false;
    }
}

const removeStorage = async (storage) => {
    try {
        await AsyncStorage.removeItem(storage);
        return true;
    } catch (err) {
        console.warn(err);
        return false;
    }
}

export {getFromStorage, setStorage, removeStorage};