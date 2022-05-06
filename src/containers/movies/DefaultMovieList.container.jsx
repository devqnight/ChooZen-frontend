import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { MovieCard } from "../../containers/movies/MovieCard.container";

const DefaultMovieList = (props) => {

    const user = useSelector((state) => state.user);

    return (
        <View style={style.cardContainer}>
            <MovieCard user={user} theme={props.theme} onUpdate={props.onUpdate} movie={props.movies[0]} />
        </View>
    );
}

export {DefaultMovieList};

const style = StyleSheet.create({
    cardContainer: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        height: "91%"
    }
});
