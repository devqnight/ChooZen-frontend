import { combineReducers } from "redux";
import { CHANGE_GROUP_FAILURE, CHANGE_GROUP_SUCCESS, CHANGE_GROUP_REQUEST, FECTH_GROUPS_REQUEST, FECTH_GROUPS_SUCCESS, FECTH_GROUPS_FAILURE, JOIN_GROUP_REQUEST, JOIN_GROUP_SUCCESS, JOIN_GROUP_FAILURE, CREATE_GROUP_REQUEST, CREATE_GROUP_SUCCESS, CREATE_GROUP_FAILURE, FETCH_GROUPS_FAILURE, FETCH_GROUPS_REQUEST, FETCH_GROUPS_SUCCESS, FETCH_GROUP_FAILURE, FETCH_GROUP_REQUEST, FETCH_GROUP_SUCCESS, DELETE_GROUP_FAILURE, DELETE_GROUP_REQUEST, DELETE_GROUP_SUCCESS } from "../constants/groups.constants";
import movies from "./movies.reducer";

const groups = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_GROUP_FAILURE:
            return { ...state, isLoading: false, err: action.err };
        case CHANGE_GROUP_REQUEST:
            return { ...state, isLoading: true };
        case CHANGE_GROUP_SUCCESS:
            return { ...state, isLoading: false, active: action.group };
        case CREATE_GROUP_FAILURE:
            return { ...state, isLoading: false, err: action.err };
        case CREATE_GROUP_REQUEST:
            return { ...state, isLoading: true };
        case CREATE_GROUP_SUCCESS:
            return { ...state, isLoading: false };
        case FETCH_GROUPS_FAILURE:
            return { ...state, isLoading: false, err: action.err };
        case FETCH_GROUPS_REQUEST:
            return { ...state, isLoading: true };
        case FETCH_GROUPS_SUCCESS:
            return { ...state, isLoading: false, groups: action.groups, active: {...state.active} || action.groups[0] };
        case FETCH_GROUP_FAILURE:
            return { ...state, isLoading: false, err: action.err };
        case FETCH_GROUP_REQUEST:
            return { ...state, isLoading: true };
        case FETCH_GROUP_SUCCESS:
            return { ...state, isLoading: false, active: action.group };
        case DELETE_GROUP_FAILURE:
            return {...state, isLoading: false};
        case DELETE_GROUP_REQUEST:
            return {...state, isLoading: true};
        case DELETE_GROUP_SUCCESS:
            return {...state, isLoading: false};
        default:
            return state;
    }
}

const data = combineReducers({
    groups: groups,
    movies: movies
});

export default data;