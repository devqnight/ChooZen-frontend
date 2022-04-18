import { IS_AUTHENTICATED_REQUEST, IS_AUTHENTICATED_FAILURE, IS_AUTHENTICATED_SUCCESS } from "../constants/user.constants";

const initialState = {
    "authenticated": false,
    "birthdate": null,
    "date_joined": null,
    "email": null,
    "first_name": null,
    "id": null,
    "is_active": false,
    "is_staff": false,
    "is_superuser": false,
    "last_login": null,
    "last_name": null,
    "username": null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTHENTICATED_REQUEST:
            return {...state, loading: true};
        case IS_AUTHENTICATED_FAILURE:
            return initialState;
        case IS_AUTHENTICATED_SUCCESS:
            return {...state, ...action.data, loading: false};
        default:
            return state;
    }
}

export {user};