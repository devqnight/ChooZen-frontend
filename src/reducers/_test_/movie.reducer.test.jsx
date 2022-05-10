import movies from "../movies.reducer";


test("should return FETCH_MOVIES_SUCCESS", () => {
    const action = {
        type: "FETCH_MOVIES_SUCCESS",
        movies: [{title: "test"}]
    }
    const newState = movies(undefined, action);
    expect(newState).toEqual({
        movies: [{title: "test"}],
        search: [],
        voted: [],
        current: null,
        loading: false
    })
});

test("should return FETCH_MOVIES_REQUEST", () => {
    const action = {
        type: "FETCH_MOVIES_REQUEST"
    }
    const newState = movies(undefined, action);
    expect(newState).toEqual({
        movies: [],
        search: [],
        voted: [],
        current: null,
        loading: true
    })
});

test("should return FETCH_MOVIES_FAILURE", () => {
    const action = {
        type: "FETCH_MOVIES_FAILURE"
    }
    const newState = movies(undefined, action);
    expect(newState).toEqual({
        movies: [],
        search: [],
        voted: [],
        current: null,
        loading: false
    })
});

test("should return SEARCH_MOVIES_SUCCESS", () => {
    const action = {
        type: "SEARCH_MOVIES_SUCCESS",
        movies: [{title: "test"}]
    }
    const newState = movies(undefined, action);
    expect(newState).toEqual({
        movies: [],
        search: [{title: "test"}],
        voted: [],
        current: null,
        loading: false
    })
});

test("should return SEARCH_MOVIES_REQUEST", () => {
    const action = {
        type: "SEARCH_MOVIES_REQUEST"
    }
    const newState = movies(undefined, action);
    expect(newState).toEqual({
        movies: [],
        search: [],
        voted: [],
        current: null,
        loading: true
    })
});

test("should return SEARCH_MOVIES_FAILURE", () => {
    const action = {
        type: "SEARCH_MOVIES_FAILURE"
    }
    const newState = movies(undefined, action);
    expect(newState).toEqual({
        movies: [],
        search: [],
        voted: [],
        current: null,
        loading: false
    })
});

test("should return RELOAD_MOVIES_SUCCESS", () => {
    const action = {
        type: "RELOAD_MOVIES_SUCCESS",
        movies: [{title: "test"}]
    }
    const newState = movies(undefined, action);
    expect(newState).toEqual({
        movies: [{title: "test"}],
        loading: false
    })
});

test("should return RELOAD_MOVIES_REQUEST", () => {
    const action = {
        type: "RELOAD_MOVIES_REQUEST"
    }
    const newState = movies(undefined, action);
    expect(newState).toEqual({
        movies: [],
        loading: true,
        voted: [],
        current: null,
        search: []
    })
});

test("should return RATE_MOVIE_REQUEST", () => {
    const action = {
        type: "RATE_MOVIE_REQUEST",
        movie: {title: "test"}
    }
    const newState = movies(undefined, action);
    expect(newState).toEqual({
        movies: [],
        search: [],
        voted: [],
        current: null,
        loading: true
    })
});

test("should return SEARCH_MOVIES_FAILURE", () => {
    const action = {
        type: "SEARCH_MOVIES_FAILURE"
    }
    const newState = movies(undefined, action);
    expect(newState).toEqual({
        movies: [],
        search: [],
        voted: [],
        current: null,
        loading: false
    })
});
