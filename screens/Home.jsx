import React, {useState} from 'react';
import { Text, View, Modal, StyleSheet, Pressable, Image } from "react-native";

import {useNavigation} from '@react-navigation/native';

import {SearchBox} from "../components/SearchBox";
import {MovieListe} from "../components/MovieListe";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTimeout, setSearchTimeout] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    useNavigation();

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

    const onSearchValueChange = searchValue => {
        clearTimeout(searchTimeout);
        searchXhr.abort();

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

    return (
        <View style={styles.mainView}>
            <Pressable
                style={[styles.floatingButton]}
                onPress={() => setModalVisible(true)}
            >
                <Image
                    style={styles.floatingButtonIcon}
                    source={require('../assets/plus.png')}/>
            </Pressable>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalView}>
                    <SearchBox setSearchValue={onSearchValueChange} />
                    <MovieListe style={styles.movieList} movies={movies}/>
                    <View style={styles.modalButtons}>
                        <Pressable
                            style={[styles.modalButton, styles.modalLeftButton]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.modalButtonText}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={styles.modalButton}
                            disabled
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.modalButtonText}>Add Movie</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        width: "100%",
        height: "100%"
    },
    floatingButton: {
        width: 55,
        height: 55,
        position: "absolute",
        bottom: 20,
        right: 20,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orchid"
    },
    floatingButtonIcon: {
        width: 30,
        height: 30
    },
    modalView: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        padding: 10
    },
    movieList: {
        flex: 1,
        marginTop: 10
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    modalButton: {
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orchid",
        flex: 1,
        padding: 10
    },
    modalLeftButton: {
        marginRight: 10
    },
    modalButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});
