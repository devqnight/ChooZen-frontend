import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { fetchMovie, movies } from "../../apis/api-movies";

import Header from "../../containers/common/Header.container";
import { DefaultNoGroup } from "../../containers/groups/DefaultNoGroup.container";
import { DefaultMovieList } from "../../containers/movies/DefaultMovieList.container";

const Home = () => {
    const theme = useSelector((state) => state.theme);
    const groups = useSelector((state) => state.data.groups);

    const [moviesFull, setMoviesFull] = useState(movies);

    const hasGroup = groups.active && (groups.groups && groups.groups.length > 0) ? true : false;
    if(!hasGroup)
        return (
            <View>
                <Header title="Home" />
                <DefaultNoGroup theme={theme} />
            </View>
        );

    
    // movies

    const updateMovies = (value, movie) => {
        if(value){
            
            setMoviesFull(moviesFull.filter((item, index, arr) => {return item.id !== movie.id}));
        }
    }

    let homeView 
    if (moviesFull.length > 0)
        homeView = <DefaultMovieList theme={theme} movies={moviesFull} onUpdate={(value, movie) => updateMovies(value, movie)} />;
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