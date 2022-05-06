import React from "react";
import {ScrollView, StyleSheet, View} from 'react-native';
import { MovieCard } from "./MovieCard.container";

const ScrollMovieList = ({movies, group, user, theme, close, height, marginBottom, search, onUpdate}) => {

    return (
        <ScrollView style={[style.list, {marginBottom: marginBottom}]}>
            {movies.map((movie, index) => {
                return <View style={[style.container, {height: height}]}
                            key={index}
                        >
                    <MovieCard 
                        search={search}
                        theme={theme}
                        onUpdate={onUpdate}
                        user={user}
                        group={group}
                        movie={movie}
                        closeAll={close}
                    />
                </View>
            })}
        </ScrollView>
    );
}

export {ScrollMovieList};

const style = StyleSheet.create({
    list: {
        display: "flex",
        flexGrow: 1,
        height: "104%",
    },
    container: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        height: 250
    }
});