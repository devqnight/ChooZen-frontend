import { CHANGE_GROUP_FAILURE, CHANGE_GROUP_SUCCESS, CHANGE_GROUP_REQUEST, FETCH_GROUPS_REQUEST, FETCH_GROUPS_SUCCESS, FETCH_GROUPS_FAILURE, JOIN_GROUP_REQUEST, JOIN_GROUP_SUCCESS, JOIN_GROUP_FAILURE, CREATE_GROUP_REQUEST, CREATE_GROUP_SUCCESS, CREATE_GROUP_FAILURE, } from "../constants/groups.constants";
import { changeGroup, getGroups, createGroup } from "../apis/api-groups";

const updateGroup = (token, group) => {
    const request = () => {return {type: CHANGE_GROUP_REQUEST}};
    const success = (group) => {return {type: CHANGE_GROUP_SUCCESS, group}};
    const failure = (err) => {return {type: CHANGE_GROUP_FAILURE, err}};

    return async dispatch => {
        dispatch(request());
        await changeGroup(token, group)
            .then(response => {
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure(error));
            })
    };
}

const fetchGroups = (token) => {
    const request = () => {return {type: FETCH_GROUPS_REQUEST}};
    const success = (groups) => {return {type: FETCH_GROUPS_SUCCESS, groups}};
    const failure = (err) => {return {type: FETCH_GROUPS_FAILURE, err}};

    return async dispatch => {
        dispatch(request());
        await getGroups(token)
            .then(response => {
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure(error));
            });
    };
}

const doJoinGroup = (token, name) => {
    const request = () => {return {type: JOIN_GROUP_REQUEST}};
    const success = (groups) => {return {type: JOIN_GROUP_SUCCESS, groups}};
    const failure = (err) => {return {type: JOIN_GROUP_FAILURE, err}};
};

const doCreateGroup = (token, name) => {
    const request = () => {return {type: CREATE_GROUP_REQUEST}};
    const success = (groups) => {return {type: CREATE_GROUP_SUCCESS, groups}};
    const failure = (err) => {return {type: CREATE_GROUP_FAILURE, err}};

    return async dispatch => {
        dispatch(request());
        await createGroup(token, name)
            .then(response => {
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure(error));
            })
    }
}

export {updateGroup, fetchGroups, doJoinGroup, doCreateGroup};