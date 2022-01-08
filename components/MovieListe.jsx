import React from 'react';
import {StyleSheet, View, Text, ScrollView} from "react-native";

export const MovieListe = (props) => {
    return (
        <ScrollView>
            {props.movies.map((movie, index) => (
                <View key={index} style={styles.container}>
                    <img src={movie.imageUrl} alt='movie'/>
                    <Text style={styles.title}>
                        {movie.title}
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 50,
        margin: 20,
        borderRadius:10,
        backgroundColor:'white',
        borderWidth:2
    },
    title: {
        alignItems: 'center',
    }
});
