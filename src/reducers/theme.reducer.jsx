import { THEME_SWITCH_REQUEST, THEME_SWITCH_SUCCESS, THEME_SWITCH_FAILURE } from "../constants/theme.constants";

const initialState = {
    bar: {
        activeTint: "#FFF",
        inactiveTint: "#D5B0D5",
        activeBackground: "#D5B0D5",
        inactiveBackground: "#FFFFFF",
    },
    accentColor: "#D5B0D5",
    backgroundColor: "#D5B0D5"
}

const theme = (state = initialState, action) => {
    switch (action.type) {
        case THEME_SWITCH_FAILURE:
        case THEME_SWITCH_REQUEST:
            return initialState;
        case THEME_SWITCH_SUCCESS:
            return action.theme;
        default:
            return state;
    }
}

export default theme;