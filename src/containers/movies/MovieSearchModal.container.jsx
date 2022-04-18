import {useState} from "react";
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Pressable} from "react-native";

import {CancelConfirmModal} from "../common/CancelConfirmModal.container";
import basicStyles from "../../themes/basic_components_styles";

import MovieSearchDetailModal from "./MovieSearchDetailModal.container";
import {useNavigation} from "@react-navigation/native";

export default function(props) {
    const [movies, setMovies] = useState([]);
    const [searchTimeout, setSearchTimeout] = useState();
    const [wasVisible, setWasVisible] = useState(false);
    const [movieDetailModalVisible, setMovieDetailModalVisible] = useState(false);
    const [focusedMovie, setFocusedMovie] = useState({});

    useNavigation();

    const initialSearchXhr = new XMLHttpRequest();

    initialSearchXhr.onload = () => {
        const searchResult = JSON.parse(initialSearchXhr.response);
        const newMovies = [];

        for(const movie of searchResult.results) {
            newMovies.push({
                id: movie.id,
                title: movie.title,
                imageUrl: movie.image,
                description: movie.description
            });
        }

        setMovies(newMovies);
    }

    const [searchXhr, setSearchXhr] = useState(initialSearchXhr);

    const abortSearch = () => {
        clearTimeout(searchTimeout);
        searchXhr.abort();
    }

    const onSearchValueChange = searchValue => {
        abortSearch();

        if(searchValue == "") {
            setMovies([]);
            return;
        }

        const timeout = setTimeout(sendSearchRequest, 500, searchValue);
        setSearchTimeout(timeout);
    }

    const sendSearchRequest = searchValue => {
        searchXhr.open("POST",
                "https://bique.familyds.com:8001/api-choozen/search/", true);

        const formData = new FormData();
        formData.append("movie-title", searchValue);
        searchXhr.send(formData);
    }

    if(props.visible && !wasVisible) {
        setWasVisible(true);
    } else if(!props.visible && wasVisible) {
        setWasVisible(false);
        setMovies([])
        abortSearch();
    }

    const onMovieSelected = movie => {
        setMovieDetailModalVisible(true);
        setFocusedMovie(movie);
    }

    const onMovieChosen = () => {
        setMovieDetailModalVisible(false);
        props.onMovieChosen(focusedMovie);
    }

    return (
        <CancelConfirmModal visible={props.visible}
            theme={props.theme}
            onRequestClose={props.onRequestClose}>

            <TextInput
                onChangeText={onSearchValueChange}
                placeholder="Search a movie…"
                style={basicStyles.modalTextInput}/>
            <ScrollView style={styles.list}
                contentContainerStyle={styles.listContentContainer}>
                {movies.map((movie, index) => (
                    <Pressable key={index} style={styles.movie}
                        onPress={() => onMovieSelected(movie)}>

                        <Image style={styles.movieImage}
                            source={{uri: movie.imageUrl}}
                            accessibilityLabel="movie"/>

                        <View style={styles.movieSide}>
                            <Text style={[styles.movieTitle]}>
                                {movie.title}
                            </Text>
                            <Text style={styles.movieDescription}>
                                {movie.description}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
            <MovieSearchDetailModal visible={movieDetailModalVisible}
                movie={focusedMovie}
                theme={props.theme}
                onRequestClose={() => setMovieDetailModalVisible(false)}
                onMovieChosen={onMovieChosen}/>
        </CancelConfirmModal>
    );
}

const styles = StyleSheet.create({
    list: {
        marginTop: 10
    },
    listContentContainer: {
        alignItems: "center"
    },
    movie: {
        width: "100%",
        maxWidth: 800,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: "#dddddd",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    movieImage: {
        width: 60,
        height: 90,
        marginEnd: 10
    },
    movieSide: {
        flex: 1
    },
    movieTitle: {
        fontSize: 18,
        marginBottom: 5
    },
    movieDescription: {
        fontSize: 14
    }
});