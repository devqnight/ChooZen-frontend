import { THEME_SWITCH_REQUEST, THEME_SWITCH_SUCCESS, THEME_SWITCH_FAILURE } from "../constants/theme.constants";
import { changeColor } from "../apis/api-theme";

const themeSwitch = (color) => {
    const request = () => {return {type: THEME_SWITCH_REQUEST, }};
    const success = (theme) => {return {type: THEME_SWITCH_SUCCESS, theme}};
    const failure = (error) => {return {type: THEME_SWITCH_FAILURE, error}};

    return async dispatch => {
        dispatch(request());
        changeColor(color)
            .then(response => {
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure(error));
            })
    };
}

export {themeSwitch}