import {user} from "../user.reducer";

test("should return IS_AUTHENTICATED_REQUEST", () => {
    const action = {
        type: "IS_AUTHENTICATED_REQUEST",
    };
    expect(user(undefined, action)).toEqual({
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
        "loading": true,
    });
});

test("should return IS_AUTHENTICATED_FAILURE", () => {
    const action = {
        type: "IS_AUTHENTICATED_FAILURE",
    };
    expect(user(undefined, action)).toEqual({
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
        "username": null
    });
});