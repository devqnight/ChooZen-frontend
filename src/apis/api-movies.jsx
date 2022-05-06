import { handleError } from "../utils/tools";
import { getCSRF } from "./api-common";

import { URLSERV } from "../../api";

const urlSearch= URLSERV + "api-choozen/advanced_search/";
const apiProposeMovie = URLSERV + "api-choozen/propose_movie/";
const apiFetchMovies = URLSERV + "api-choozen/fetch_movies/";
const apiReviewMovie = URLSERV + "api-choozen/review_movie/";

const fetchMovieAPI = async (movieId, userId) => {
    let res;
    setTimeout(() => {
        
    
    }, 1500);
    res = defaultMovie;

    return res;
};

/**
 * 
 * deprecated
 * @param {} groupId 
 * @param {*} userId 
 * @returns
 */
const fetchMoviesAPI = async (groupId, userId) => {
    const csrf = await getCSRF();

    const form = new FormData();
    form.append("user_id", userId);
    form.append("group_id", groupId);

    let response = await fetch(
        apiFetchMovies,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    );

    let json = await handleError(response).json();
    
    if(json.errorMessage)
        throw Error(json.errorMessage);

    return json;
};

const addMovieAPI = async (movieId, comment, groupId, userId) => {
    const csrf = await getCSRF();

    const form = new FormData();
    form.append("user_id", userId);
    form.append("group_id", groupId);
    form.append("movie_id", movieId);
    form.append("comments", comment);

    let response = await fetch(
        apiProposeMovie,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    );

    return response;

}

const updateScoreAPI = (props) => {

}

const deleteMovieAPI = (props) => {

}

const searchMoviesAPI = async (props) => {

    const csrf = await getCSRF();

    const form = new FormData();
    form.append('movie-title', props.searchValue)

    let response = await fetch(
        urlSearch,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    );

    let json = await handleError(response).json();
    
    if(json.errorMessage)
        throw Error(json.errorMessage);

    return json;
}

const rateMovieAPI = async (movieId, rate, groupId, userId) => {
    const csrf = await getCSRF();

    const form = new FormData();
    form.append('user_id', userId);
    form.append('group_id', groupId);
    form.append('movie_id', movieId);
    form.append('note', rate);

    let response = await fetch(
        apiReviewMovie,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    );

    return response;
}

export {fetchMovieAPI, fetchMoviesAPI, addMovieAPI, updateScoreAPI, deleteMovieAPI, searchMoviesAPI, rateMovieAPI};