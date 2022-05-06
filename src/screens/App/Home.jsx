import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateGroup } from "../../actions/groups.actions";
import { fetchMovies, rateMovie } from "../../actions/movies.actions";

import Header from "../../containers/common/Header.container";
import { DefaultNoGroup } from "../../containers/groups/DefaultNoGroup.container";
import { DefaultMovieList } from "../../containers/movies/DefaultMovieList.container";
import {Loading} from '../Loading';

const Home = () => {
    const theme = useSelector((state) => state.theme);
    const user = useSelector((state) => state.user);
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
        if(value in [0,1,2,3,4]){
            await dispatch(rateMovie(movie.imdb_id, value, groups.active.id, user.id));
            await dispatch(updateGroup(user.id, groups.active.id));
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