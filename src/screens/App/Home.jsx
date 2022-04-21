import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { fetchMovie, movies } from "../../apis/api-movies";

import Header from "../../containers/common/Header.container";
import { DefaultNoGroup } from "../../containers/groups/DefaultNoGroup.container";
import { MovieCard } from "../../containers/movies/MovieCard.container";

const Home = () => {
    const theme = useSelector((state) => state.theme);
    const groups = useSelector((state) => state.groups);

    const [moviesFull, setMoviesFull] = useState([]);

    useEffect(async () => {
        for(let movie of movies){
            let newmovie = await fetchMovie(movie.id);
            moviesFull.push(newmovie);
        }
    });

    const hasGroup = groups.active || (groups.groups && groups.groups.length > 0) ? true : false;
    if(!hasGroup)
        return (
            <View>
                <Header title="Home" />
                <DefaultNoGroup theme={theme} />
            </View>
        );

    
    /**
     * movies
     */

    return (
        <View>
            <Header title="Home" />
            <View style={style.cardContainer}>
                <MovieCard theme={theme} movie={movies[1]} />
            </View>
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