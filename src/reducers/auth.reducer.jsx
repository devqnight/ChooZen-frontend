import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constants/auth.constants";

const initialState = {
    isAuth: false,
    isLoading: false,
    login: null,
    token: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, isLoading: true}
        case LOGIN_FAILURE:
            return initialState
        case LOGIN_SUCCESS:
            return {isAuth: true, isLoading: false, login: action.user.login, token: action.user.response}
        case LOGOUT_REQUEST:
            return {...state, isLoading: true, token: null}
        case LOGOUT_FAILURE:
        case LOGOUT_SUCCESS:
            return initialState
        case REGISTER_REQUEST:
            return {...state, isLoading: true, token: null}
        case REGISTER_FAILURE:
            return initialState
        case REGISTER_SUCCESS:
            return {isAuth: true, isLoading: false, login: action.user.login, token: action.user.response}
        default:
            return state;
    }
}

export default auth;