import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from "react-native";

export const MovieListe = (props) => {
    return (
        <ScrollView>
            {props.movies.map((movie, index) => (
                <View key={index} style={styles.container}>
                    <Image style={styles.image} source={{uri: movie.imageUrl}} accessibilityLabel="movie"/>
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
    },
    image: {
        width: 200,
        height: 300
    }
});
