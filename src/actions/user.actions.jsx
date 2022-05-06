import { isAuthenticated } from "../apis/api-common";
import { IS_AUTHENTICATED_REQUEST, IS_AUTHENTICATED_FAILURE, IS_AUTHENTICATED_SUCCESS } from "../constants/user.constants";
import { fetchGroups, updateGroup } from "./groups.actions";
import { store } from "../store";


const checkAuthentication = (token, username) => {
    const request = (user) => {return {type: IS_AUTHENTICATED_REQUEST, user}};
    const success = (data) => {return {type: IS_AUTHENTICATED_SUCCESS, data: data}};
    const failure = (user) => {return {type: IS_AUTHENTICATED_FAILURE, user}};

    return async dispatch => {
        let id;
        dispatch(request({token, username}));
        await isAuthenticated({token, username})
            .then(response => {
                id = response.id;
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure(error));
            })
        if(id){
            await dispatch(fetchGroups(id));
        }
    };
}

export {checkAuthentication};