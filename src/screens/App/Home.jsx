import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, rateMovie } from "../../actions/movies.actions";
import { fetchMovie, movies } from "../../apis/api-movies";

import Header from "../../containers/common/Header.container";
import { DefaultNoGroup } from "../../containers/groups/DefaultNoGroup.container";
import { DefaultMovieList } from "../../containers/movies/DefaultMovieList.container";
import { store } from "../../store";
import {Loading} from '../Loading';

const Home = () => {
    const theme = useSelector((state) => state.theme);
    const auth = useSelector((state) => state.auth);
    const groups = useSelector((state) => state.data.groups);
    const movies = useSelector((state) => state.data.movies);

    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(false);

    const [moviesFull, setMoviesFull] = useState([]);

    const hasGroup = groups.active && (groups.groups && groups.groups.length > 0) ? true : false;
    if(!hasGroup)
        return (
            <View>
                <Header title="Home" />
                <DefaultNoGroup theme={theme} />
            </View>
        );

    
    // movies

    const updateMovies = async (value, movie) => {
        if(value){
            await dispatch(rateMovie(movie.id, value, groups.active, auth.login))
        }
    }

    let homeView 
    if (movies.movies && movies.movies.length > 0)
        homeView = <>
            <DefaultMovieList theme={theme} movies={movies.movies} onUpdate={(value, movie) => updateMovies(value, movie)} />
            <Loading isLoading={movies.loading} theme={theme} message={"Loading movies..."} />
        </>;
    else 
        homeView = <View style={style.cardContainer}><Text>No movies in list</Text></View>

    return (
        <View>
            <Header title="Home" />
            {homeView}
        </View>
    );
};

export default Home;

const style = StyleSheet.create({
    cardContainer: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
    }
});