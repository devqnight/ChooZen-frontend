import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { rateMovie } from "../../actions/movies.actions";

import Header from "../../containers/common/Header.container";
import { DefaultNoGroup } from "../../containers/groups/DefaultNoGroup.container";
import { ScrollMovieList } from "../../containers/movies/ScrollMovieList.container";
import { NoMoviesMessage, NoMoviesMessageExternStyles } from "../../components/NoMoviesMessage";

const Next = () => {
    const theme = useSelector((state) => state.theme);
    const user = useSelector((state) => state.user);
    const groups = useSelector((state) => state.data.groups);
    const movies = useSelector((state) => state.data.movies);

    const dispatch = useDispatch();

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
            await dispatch(rateMovie(movie.imdb_id, value, groups.active.id, user.id));
        }
    }

    let nextView
    let rootViewStyle;

    if (movies.voted && movies.voted.length > 0)
        nextView = 
            <View style={{height: "93%"}}>
                <ScrollMovieList theme={theme} movies={movies.voted} height={600} marginBottom={28} onUpdate={(value, movie) => updateMovies(value, movie)} />
            </View>;
    else {
        nextView = <NoMoviesMessage/>
        rootViewStyle = NoMoviesMessageExternStyles.rootView;
    }

    return (
        <View style={rootViewStyle}>
            <Header title="Next" />
            {nextView}
        </View>
    );
};

export default Next;
