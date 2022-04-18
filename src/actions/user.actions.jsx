import { isAuthenticated } from "../apis/api-common";
import { IS_AUTHENTICATED_REQUEST, IS_AUTHENTICATED_FAILURE, IS_AUTHENTICATED_SUCCESS } from "../constants/user.constants";


const checkAuthentication = (token, username) => {
    const request = (user) => {return {type: IS_AUTHENTICATED_REQUEST, user}};
    const success = (user) => {return {type: IS_AUTHENTICATED_SUCCESS, user}};
    const failure = (user) => {return {type: IS_AUTHENTICATED_FAILURE, user}};

    return async dispatch => {
        dispatch(request({token, username}));
        await isAuthenticated({token, username})
            .then(response => {
                dispatch(success({data: response}));
            })
            .catch(error => {
                dispatch(failure(error));
            })
    };
}

export {checkAuthentication};