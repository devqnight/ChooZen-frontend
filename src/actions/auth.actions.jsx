import { signin, signout } from '../apis/api-auth';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constants/auth.constants";


const login = (login, password) => {
    const request = (user) => {return {type: LOGIN_REQUEST, user}};
    const success = (user) => {return {type: LOGIN_SUCCESS, user}};
    const failure = (user) => {return {type: LOGIN_FAILURE, user}};

    return async dispatch => {
        dispatch(request({login}));
        await signin(login, password)
            .then(response => {
                dispatch(success({response, login}));
            })
            .catch(error => {
                dispatch(failure(error));
            });
    }
};

const logout = (token) => {

    const request = (token) => {return {type: LOGOUT_REQUEST, token}};
    const success = (token) => {return {type: LOGOUT_SUCCESS, token}};
    const failure = (token) => {return {type: LOGOUT_FAILURE, token}};

    return dispatch => {
        dispatch(request({token}));
        signout(token)
            .then(response => {
                dispatch(success({response, token}));
            })
            .catch(error => {
                dispatch(failure(error));
            });
    }
};

const register = (props) => {
    const request = (user) => {return {type: REGISTER_REQUEST, user}};
    const success = (user) => {return {type: REGISTER_SUCCESS, user}};
    const failure = (user) => {return {type: REGISTER_FAILURE, user}};

    return dispatch => {
        dispatch(request())
    }
}

export {login, logout, register};