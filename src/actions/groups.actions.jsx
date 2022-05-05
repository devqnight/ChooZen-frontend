import { CHANGE_GROUP_FAILURE, CHANGE_GROUP_SUCCESS, CHANGE_GROUP_REQUEST, FETCH_GROUPS_REQUEST, FETCH_GROUPS_SUCCESS, FETCH_GROUPS_FAILURE, JOIN_GROUP_REQUEST, JOIN_GROUP_SUCCESS, JOIN_GROUP_FAILURE, CREATE_GROUP_REQUEST, CREATE_GROUP_SUCCESS, CREATE_GROUP_FAILURE, FETCH_GROUP_FAILURE, FETCH_GROUP_REQUEST, FETCH_GROUP_SUCCESS, } from "../constants/groups.constants";
import { changeGroup, getGroups, createGroup } from "../apis/api-groups";
import { setStorage } from "../utils/storage.tools";
import { fetchMovies, updateMovies } from "./movies.actions";

const updateGroup = (token, group) => {
    const request = () => {return {type: CHANGE_GROUP_REQUEST}};
    const success = (group) => {return {type: CHANGE_GROUP_SUCCESS, group}};
    const failure = (err) => {return {type: CHANGE_GROUP_FAILURE, err}};

    return async dispatch => {
        let movies;
        dispatch(request());
        await changeGroup(token, group)
            .then(response => {
                movies = response.movies;
                delete response["movies"];
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure(error));
            })
        await dispatch(updateMovies(movies));
    };
}

const fetchGroups = (token) => {
    const request = () => {return {type: FETCH_GROUPS_REQUEST}};
    const success = (groups) => {return {type: FETCH_GROUPS_SUCCESS, groups}};
    const failure = (err) => {return {type: FETCH_GROUPS_FAILURE, err}};

    return async dispatch => {
        let group;
        dispatch(request());
        await getGroups(token)
            .then(response => {
                group = response[0].id;
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure(error));
            });
        await dispatch(updateGroup(token, group));
    };
}

const fetchGroup = (id, group_id) => {
    const request = () => {return {type: FETCH_GROUP_REQUEST}};
    const success = (groups) => {return {type: FETCH_GROUP_SUCCESS, groups}};
    const failure = (err) => {return {type: FETCH_GROUP_FAILURE, err}};

    return async dispatch => {
        dispatch(request());
        await getGroup(token)
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
        let id;
        dispatch(request());
        await createGroup(token, name)
            .then(async response => {
                id = response.id;
                dispatch(success(response));
            })
            .catch(error => {
                dispatch(failure(error));
            })
        await dispatch(fetchMovies(id, token));
    }
}

export {updateGroup, fetchGroups, doJoinGroup, doCreateGroup};