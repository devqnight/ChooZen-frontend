import { CHANGE_GROUP_FAILURE, CHANGE_GROUP_SUCCESS, CHANGE_GROUP_REQUEST, FECTH_GROUPS_REQUEST, FECTH_GROUPS_SUCCESS, FECTH_GROUPS_FAILURE, JOIN_GROUP_REQUEST, JOIN_GROUP_SUCCESS, JOIN_GROUP_FAILURE, CREATE_GROUP_REQUEST, CREATE_GROUP_SUCCESS, CREATE_GROUP_FAILURE } from "../constants/groups.constants";

//group format:
// const group = {
//    name: String,
//    creator: String,
//    members: [
//        {id: string, joined: date}
//    ],
//    movies: [//to send somehow in movies.reducer, or remove movies reducer and have all reducer functions here]
//}

const groups = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_GROUP_FAILURE:
            return {...state, isLoading: false, err: action.err};
        case CHANGE_GROUP_REQUEST:
            return {...state, isLoading: true};
        case CHANGE_GROUP_SUCCESS:
            return {...state, isLoading: false, active: action.group.name, movies: action.group.movies};
        case CREATE_GROUP_FAILURE:
            return {...state, isLoading: false, err: action.err};
        case CREATE_GROUP_REQUEST:
            return {...state, isLoading: true};
        case CREATE_GROUP_SUCCESS:
            return {...state, isLoading: false, groups: action.groups.groups, movies: [], active: action.groups.groups[action.groups.groups.length - 1].name};
        default:
            return state;
    }
}

export default groups;