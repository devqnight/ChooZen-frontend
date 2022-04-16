import { IS_AUTHENTICATED_REQUEST, IS_AUTHENTICATED_FAILURE, IS_AUTHENTICATED_SUCCESS } from "../constants/user.constants";

const initialState = {

};

const user = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTHENTICATED_REQUEST:
            return {...state, loading: true};
        case IS_AUTHENTICATED_FAILURE:
            return initialState;
        case IS_AUTHENTICATED_SUCCESS:
            return {loading: false, ...action.user.data};
        default:
            return state;
    }
}

export {user};