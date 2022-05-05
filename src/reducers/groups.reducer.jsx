import { combineReducers } from "redux";
import { CHANGE_GROUP_FAILURE, CHANGE_GROUP_SUCCESS, CHANGE_GROUP_REQUEST, FECTH_GROUPS_REQUEST, FECTH_GROUPS_SUCCESS, FECTH_GROUPS_FAILURE, JOIN_GROUP_REQUEST, JOIN_GROUP_SUCCESS, JOIN_GROUP_FAILURE, CREATE_GROUP_REQUEST, CREATE_GROUP_SUCCESS, CREATE_GROUP_FAILURE, FETCH_GROUPS_FAILURE, FETCH_GROUPS_REQUEST, FETCH_GROUPS_SUCCESS } from "../constants/groups.constants";
import movies from "./movies.reducer";

const groups = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_GROUP_FAILURE:
            return { ...state, isLoading: false, err: action.err };
        case CHANGE_GROUP_REQUEST:
            return { ...state, isLoading: true };
        case CHANGE_GROUP_SUCCESS:
            return { ...state, isLoading: false, active: action.group.name };
        case CREATE_GROUP_FAILURE:
            return { ...state, isLoading: false, err: action.err };
        case CREATE_GROUP_REQUEST:
            return { ...state, isLoading: true };
        case CREATE_GROUP_SUCCESS:
            return { ...state, isLoading: false, groups: action.groups.groups, active: action.groups.groups[action.groups.groups.length - 1].name };
        case FETCH_GROUPS_FAILURE:
            return { ...state, isLoading: false, err: action.err };
        case FETCH_GROUPS_REQUEST:
            return { ...state, isLoading: true };
        case FETCH_GROUPS_SUCCESS:
            return { ...state, isLoading: false, groups: action.groups.groups, active: action.groups.groups[action.groups.groups.length - 1].name };
        default:
            return state;
    }
}

const data = combineReducers({
    groups: groups,
    movies: movies
});

export default data;