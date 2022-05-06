import { THEME_SWITCH_REQUEST, THEME_SWITCH_SUCCESS, THEME_SWITCH_FAILURE, RESTORE_THEME_REQUEST, RESTORE_THEME_SUCCESS, RESTORE_THEME_FAILURE } from "../constants/theme.constants";
import { changeColor } from "../apis/api-theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFromStorage } from "../utils/storage.tools";

const themeSwitch = (color) => {
    const request = () => {return {type: THEME_SWITCH_REQUEST, }};
    const success = (theme) => {return {type: THEME_SWITCH_SUCCESS, theme}};
    const failure = (error) => {return {type: THEME_SWITCH_FAILURE, error}};

    return async dispatch => {
        dispatch(request());
        await changeColor(color)
            .then(async response => {
                await AsyncStorage.setItem("theme", JSON.stringify(response));
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure(error));
            })
    };
}

const restoreTheme = () => {
    const request = () => {return {type: RESTORE_THEME_REQUEST, }};
    const success = (theme) => {return {type: RESTORE_THEME_SUCCESS, theme}};
    const failure = (error) => {return {type: RESTORE_THEME_FAILURE, error}};

    return async dispatch => {
        dispatch(request());
        await getFromStorage("theme")
            .then(response => {
                if(!response)
                    throw Error();
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure(error));
            })
    };
}

export {themeSwitch, restoreTheme}