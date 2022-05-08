import React, { useCallback } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { MovieCard } from "../../containers/movies/MovieCard.container";

const DefaultMovieList = (props) => {

    const user = useSelector((state) => state.user);

    return (
        <FlatList 
            data={props.movies}
            contentContainerStyle={{width: "100%", height: "95%"}}
            renderItem={(value, index) => (
                <View style={style.cardContainer}>
                    <MovieCard key={value.index} user={user} theme={props.theme} onUpdate={props.onUpdate} movie={value.item} />
                </View>
            )}
            keyExtractor={item => item.imdb_id}
        />
    );
}

export {DefaultMovieList};

const style = StyleSheet.create({
    cardContainer: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
});
