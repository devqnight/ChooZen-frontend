import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, movies } from "../../apis/api-movies";

import Header from "../../containers/common/Header.container";
import { DefaultNoGroup } from "../../containers/groups/DefaultNoGroup.container";
import { ScrollMovieList } from "../../containers/movies/ScrollMovieList.container";

const Next = () => {
    const theme = useSelector((state) => state.theme);
    const auth = useSelector((state) => state.auth);
    const groups = useSelector((state) => state.data.groups);
    const movies = useSelector((state) => state.data.movies);

    const dispatch = useDispatch();

    const [moviesFull, setMoviesFull] = useState(movies);

    const hasGroup = groups.active && (groups.groups && groups.groups.length > 0) ? true : false;
    if(!hasGroup)
        return (
            <View>
                <Header title="Next" />
                <DefaultNoGroup theme={theme} />
            </View>
        );

    
    // movies

    const updateMovies = async (value, movie) => {
        if(value){
            await dispatch(rateMovie(movie.id, value, groups.active, auth.login))
        }
    }

    let nextView 
    if (movies.voted && movies.voted.length > 0)
        nextView = 
            <View style={{height: "93%"}}>
                <ScrollMovieList theme={theme} movies={movies.voted} height={600} marginBottom={28} onUpdate={(value, movie) => updateMovies(value, movie)} />
            </View>;
    else 
        nextView = <View style={style.cardContainer}><Text>No movies in list</Text></View>

    return (
        <View>
            <Header title="Next" />
            {nextView}
        </View>
    );
};

export default Next;

const style = StyleSheet.create({
    cardContainer: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
    }
});