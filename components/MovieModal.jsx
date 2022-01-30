import {useState} from "react";
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from "react-native";

import FormModal from "./FormModal";
import basicStyles from "../theme/basic_components_styles";

export default function(props) {
    const [movies, setMovies] = useState([]);
    const [searchTimeout, setSearchTimeout] = useState();
    const [wasVisible, setWasVisible] = useState(false);

    const initialSearchXhr = new XMLHttpRequest();

    initialSearchXhr.onload = () => {
        const searchResult = JSON.parse(initialSearchXhr.response);
        const newMovies = [];

        for(const movie of searchResult.results) {
            newMovies.push({
                title: movie.title,
                imageUrl: movie.image
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

    return (
        <FormModal visible={props.visible}
            onRequestClose={props.onRequestClose}
            validateText="Choose">

            <TextInput
                onChangeText={onSearchValueChange}
                placeholder="Search a movie…"
                style={basicStyles.modalTextInput}/>
            <ScrollView style={styles.list}
                contentContainerStyle={styles.listContentContainer}>

                {movies.map((movie, index) => (
                    <View key={index} style={styles.movie}>
                        <Image style={styles.movieImage}
                            source={{uri: movie.imageUrl}}
                            accessibilityLabel="movie"/>

                        <Text style={styles.movieTitle}>
                            {movie.title}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </FormModal>
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
        maxWidth: 200,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: "#dddddd",
        borderWidth: 1
    },
    movieImage: {
        width: "100%",
        height: 300,
        marginBottom: 10
    },
    movieTitle: {
        textAlign: "center",
        fontSize: 16
    }
});
