import auth from "../auth.reducer";

const initialState = {
    isAuth: false,
    isLoading: false,
    login: null,
    token: null,
    err: null
};

test("should return initial state", () => {
    expect(auth(undefined, {})).toEqual(initialState);
});

test("should return REGISTER_SUCCESS", () => {
    const action = {
        type: "REGISTER_SUCCESS",
        user: {
            login: "test",
            response: "test"
        }
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: true,
        isLoading: false,
        login: "test",
        token: "test"
    })
});

test("should return REGISTER_FAILURE", () => {
    const action = {
        type: "REGISTER_FAILURE",
        err: "test"
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: false,
        isLoading: false,
        login: null,
        token: null,
        err: "test"
    })
});

test("should return REGISTER_REQUEST", () => {
    const action = {
        type: "REGISTER_REQUEST"
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: false,
        isLoading: true,
        login: null,
        token: null,
        err: null
    })
});

test("should return LOGOUT_SUCCESS", () => {
    const action = {
        type: "LOGOUT_SUCCESS"
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: false,
        isLoading: false,
        login: null,
        token: null,
        err: null
    })
});

test("should return LOGOUT_FAILURE", () => {
    const action = {
        type: "LOGOUT_FAILURE",
        err: "test"
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: false,
        isLoading: false,
        login: null,
        token: null,
        err: null
    })
});

test("should return LOGOUT_REQUEST", () => {
    const action = {
        type: "LOGOUT_REQUEST"
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: false,
        isLoading: true,
        login: null,
        token: null,
        err: null
    })
});

test("should return LOGIN_SUCCESS", () => {
    const action = {
        type: "LOGIN_SUCCESS",
        user: {
            login: "test",
            response: "test"
        }
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: true,
        isLoading: false,
        login: "test",
        token: "test"
    })
});

test("should return LOGIN_FAILURE", () => {
    const action = {
        type: "LOGIN_FAILURE",
        err: "test"
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: false,
        isLoading: false,
        login: null,
        token: null,
        err: undefined
    })
});

test("should return LOGIN_REQUEST", () => {
    const action = {
        type: "LOGIN_REQUEST"
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: false,
        isLoading: false,
        login: null,
        token: null,
        err: null
    })
});

test("should return LOGBACK_SUCCESS", () => {
    const action = {
        type: "LOGBACK_SUCCESS",
        user: {
            login: "test",
            response: "test"
        }
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: true,
        isLoading: false,
        login: "test",
        token: "test"
    })
});

test("should return LOGBACK_FAILURE", () => {
    const action = {
        type: "LOGBACK_FAILURE",
        err: "test"
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: false,
        isLoading: false,
        login: null,
        token: null,
        err: null
    })
});

test("should return LOGBACK_REQUEST", () => {
    const action = {
        type: "LOGBACK_REQUEST"
    }
    const state = auth(initialState, action)
    expect(state).toEqual({
        isAuth: false,
        isLoading: false,
        login: null,
        token: null,
        err: null
    })
});