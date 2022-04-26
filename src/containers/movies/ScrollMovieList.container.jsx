import React from "react";
import {ScrollView, StyleSheet, View} from 'react-native';
import { MovieCard } from "./MovieCard.container";

const ScrollMovieList = ({movies, group, user, theme, close, height, marginBottom}) => {

    return (
        <ScrollView style={[style.list, {marginBottom: marginBottom}]}>
            {movies.map((movie, index) => {
                return <View style={[style.container, {height: height}]}
                            key={index}
                        >
                    <MovieCard 
                        search={true}
                        theme={theme}
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
        height: "100%"
    },
    container: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        height: 250
    }
});