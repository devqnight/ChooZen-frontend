import React from 'react';
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";
import {StyleSheet} from "react-native";
import Text from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedText";

const MovieListe = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <View key={index} style={styles.container}>
                    <img src={movie.imageUrl} alt='movie'/>
                    <Text style={styles.title}>
                        {movie.title}
                    </Text>

                </View>
            ))}
        </>
    );
};

export default MovieListe;

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
