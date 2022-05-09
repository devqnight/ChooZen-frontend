import { signin, signout, signup } from '../apis/api-auth';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGBACK_FAILURE, LOGBACK_REQUEST, LOGBACK_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constants/auth.constants";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkAuthentication } from './user.actions';


const logback = (login, token) => {
    const request = (user) => {return {type: LOGBACK_REQUEST, user}};
    const success = (user) => {return {type: LOGBACK_SUCCESS, user}};
    const failure = (user) => {return {type: LOGBACK_FAILURE, user}};

    return async dispatch => {
        dispatch(request({}));
        if(login && token)
            dispatch(success({response: token, login: login}));
        else
            dispatch(failure({}));
    }
}

const login = (login, password) => {
    const request = (user) => {return {type: LOGIN_REQUEST, user}};
    const success = (user) => {return {type: LOGIN_SUCCESS, user}};
    const failure = (user) => {return {type: LOGIN_FAILURE, user}};

    return async dispatch => {
        let token;
        dispatch(request({login}));
        await signin(login, password)
            .then( async response => {
                await AsyncStorage.setItem("auth", JSON.stringify({login: login, token: response}));
                dispatch(success({response, login}));
                token = response;
            })
            .catch(error => {
                dispatch(failure(error));
            });
        await dispatch(checkAuthentication(token,login));
    }
};

const logout = (token) => {

    const request = (token) => {return {type: LOGOUT_REQUEST, token}};
    const success = (token) => {return {type: LOGOUT_SUCCESS, token}};
    const failure = (token) => {return {type: LOGOUT_FAILURE, token}};

    return dispatch => {
        dispatch(request({token}));
        signout(token)
            .then(async response => {
                try {
                    await AsyncStorage.setItem("auth", JSON.stringify({}));
                } catch (error){
                    Promise.reject(error);
                }
                dispatch(success({response, token}));
                dispatch({type: 'USER_LOGOUT'});
            })
            .catch(error => {
                dispatch(failure(error));
            });
    }
};

const register = (props) => {
    const request = (user) => {return {type: REGISTER_REQUEST, user}};
    const success = (user) => {return {type: REGISTER_SUCCESS, user}};
    const failure = (err) => {return {type: REGISTER_FAILURE, err}};

    return async dispatch => {
        let token;
        dispatch(request({login: props.login}));
        await signup(props)
            .then( async response => {
                try {
                    await AsyncStorage.setItem("auth", JSON.stringify({login: props.login, token: response}));
                    token = response;
                } catch (error){
                    Promise.reject(error);
                }
                dispatch(success({response, login: props.login}));
            })
            .catch(error => {
                dispatch(failure(error));
            })
        if(token)
            await dispatch(checkAuthentication(token,props.login));
    }
}

export {logback, login, logout, register};