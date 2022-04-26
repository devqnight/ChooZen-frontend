import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_FAILURE, RATE_MOVIE_REQUEST, RATE_MOVIE_SUCCESS, RATE_MOVIE_FAILURE, ADD_MOVIE_SUCCESS, ADD_MOVIE_REQUEST, ADD_MOVIE_FAILURE, SEARCH_CLEAR_SUCCESS, SEARCH_CLEAR_REQUEST } from '../constants/movies.contants';
import { searchMoviesAPI, fetchMovieAPI, fetchMoviesAPI, rateMovieAPI, addMovieAPI } from '../apis/api-movies';

const fetchMovie = (movieId, userId) => {
    const request = () => {return {type: FETCH_MOVIE_REQUEST}};
    const success = (movie) => {return {type: FETCH_MOVIE_SUCCESS, movie}};
    const failure = (err) => {return {type: FETCH_MOVIE_FAILURE, err}};


    return async dispatch => {
        dispatch(request());
        await fetchMovieAPI(movieId, userId)
            .then(response => {
                dispatch(success(response));
            })
            .catch(err => {
                dispatch(failure(err));
            });
    }
}

const fetchMovies = (groupId, userId) => {
    const request = () => {return {type: FETCH_MOVIES_REQUEST}};
    const success = (movies) => {return {type: FETCH_MOVIES_SUCCESS, movies}};
    const failure = (err) => {return {type: FETCH_MOVIES_FAILURE, err}};


    return async dispatch => {
        dispatch(request());
        await fetchMoviesAPI(groupId, userId)
            .then(response => {
                dispatch(success(response));
            })
            .catch(err => {
                dispatch(failure(err));
            })
    }
}

const searchMovies = (name) => {
    const request = () => {return {type: SEARCH_MOVIES_REQUEST}};
    const success = (movies) => {return {type: SEARCH_MOVIES_SUCCESS, movies}};
    const failure = (err) => {return {type: SEARCH_MOVIES_FAILURE, err}};


    return async dispatch => {
        dispatch(request());
        await searchMoviesAPI({searchValue: name})
            .then(response => {
                dispatch(success(response.results));
            })
            .catch(err => {
                dispatch(failure(err));
            })
    }
}

const reloadMovies = (groupId, userId) => {

}

const addMovie = (movieId, comment, groupId, userId) => {
    const request = () => {return {type: ADD_MOVIE_REQUEST}};
    const success = (movie) => {return {type: ADD_MOVIE_SUCCESS, movie}};
    const failure = (err) => {return {type: ADD_MOVIE_FAILURE, err}};


    return async dispatch => {
        dispatch(request());
        await addMovieAPI(movieId, comment, groupId, userId)
            .then(response => {
                dispatch(success(response));
            })
            .catch(err => {
                dispatch(failure(err));
            });
    }
}


const clearSearch = () => {
    const request = () => {return {type: SEARCH_CLEAR_REQUEST}};
    const success = () => {return {type: SEARCH_CLEAR_SUCCESS}};

    return async dispatch => {
        dispatch(request());
        await dispatch(success());
    }
}

const updateMovie = (movieId, groupId, userId) => {

}

const removeMovie = (movieId, groupId, userId) => {

}

const rateMovie = (movieId, rate, groupId, userId) => {
    const request = () => {return {type: RATE_MOVIE_REQUEST}};
    const success = (movies, voted) => {return {type: RATE_MOVIE_SUCCESS, movies, voted}};
    const failure = (err) => {return {type: RATE_MOVIE_FAILURE, err}};


    return async dispatch => {
        dispatch(request());
        await rateMovieAPI(movieId, rate, groupId, userId)
            .then(response => {
                dispatch(success(response.movies, response.voted));
            })
            .catch(err => {
                dispatch(failure(err));
            })
    }
}

export {fetchMovie,fetchMovies, addMovie, searchMovies, rateMovie, clearSearch};