import { ADD_MOVIE_FAILURE, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIE_FAILURE, FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, RELOAD_MOVIES_FAILURE, RELOAD_MOVIES_REQUEST, RELOAD_MOVIES_SUCCESS, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_FAILURE, RATE_MOVIE_SUCCESS, RATE_MOVIE_REQUEST, RATE_MOVIE_FAILURE, SEARCH_CLEAR_SUCCESS, SEARCH_CLEAR_REQUEST } from "../constants/movies.contants";

const initialState = {
    movies: [],
    search: [],
    voted: [],
    current: null,
    loading: false
}

const movies = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_SUCCESS:
            return {...state, current: action.movie, loading: false};
        case FETCH_MOVIE_REQUEST:
            return {...state, loading: true}
        case FETCH_MOVIE_FAILURE:
            return {...state, loading: false};
        case FETCH_MOVIES_SUCCESS:
            return {...state, movies: action.movies, loading: false};
        case FETCH_MOVIES_REQUEST:
            return {...state, loading: true}
        case FETCH_MOVIES_FAILURE:
            return {...state, loading: false};
        case ADD_MOVIE_SUCCESS:
            return {...state, search: [], current: null}; // to do: change state to movies and voted when api is connected
        case ADD_MOVIE_REQUEST:
        case ADD_MOVIE_FAILURE:
            return {...state, search: [], current: null};
        case RELOAD_MOVIES_SUCCESS:
            return {movies: action.movies, loading: false};
        case RELOAD_MOVIES_REQUEST:
            return {...state, loading: true}
        case RELOAD_MOVIES_FAILURE:
            return {...state, loading: false};
        case SEARCH_MOVIES_SUCCESS:
            return {...state, search: action.movies, loading: false};
        case SEARCH_MOVIES_REQUEST:
            return {...state, loading: true}
        case SEARCH_MOVIES_FAILURE:
            return {...state, loading: false};
        case SEARCH_CLEAR_SUCCESS: 
        case SEARCH_CLEAR_REQUEST:
            return {...state, search: [], current: null}
        case RATE_MOVIE_SUCCESS:
            return {...state, movies: action.movies, voted: [...(state.voted), action.voted], loading: false}
        case RATE_MOVIE_REQUEST:
            return {...state, loading: true}
        case RATE_MOVIE_FAILURE:
            return {...state, loading: false};
        default:
            return state;
    }
}

export default movies;