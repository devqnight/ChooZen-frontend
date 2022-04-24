import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from '../constants/movies.contants';

const fetchMovie = (movieId, userId) => {
    const request = () => {return {type: FETCH_MOVIE_REQUEST}};
    const success = (groups) => {return {type: FETCH_MOVIE_SUCCESS, groups}};
    const failure = (err) => {return {type: FETCH_MOVIE_FAILURE, err}};


    return async dispatch => {

    }
}