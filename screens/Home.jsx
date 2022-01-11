import React, {useState} from 'react';
import { Text, View, Modal, StyleSheet, Pressable, Image } from "react-native";

import {useNavigation} from '@react-navigation/native';

import screenStyles from '../theme/screens_styles';

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
        <View style={screenStyles.container}>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.searchBox}>
                                <SearchBox setSearchValue={onSearchValueChange} />
                            </View>
                            <MovieListe movies={movies}/>
                            <View style={styles.fixToText}>
                                <Pressable
                                    style={[styles.right, styles.buttonClose]}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.left, styles.buttonClose]}
                                    disabled
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.textStyle}>Add Movie</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Image
                        style={styles.plus}
                        source={require('../assets/plus.png')}/>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        backgroundColor: "white",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    button: {
        width: 55,
        height: 55,
        position: "absolute",
        bottom: 45,
        left:100,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    plus: {
        width: 30,
        height: 30,
    },
    buttonOpen: {
        backgroundColor: "orchid",
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    left: {
        borderRadius: 20,
        marginLeft: 20,
        marginBottom: 15,
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    right: {
        borderRadius: 20,
        marginRight: 20,
        marginBottom: 15,
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonClose: {
        backgroundColor: "orchid",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    searchBox: {
        marginTop:20,
        alignItems: "center",
        textAlign: "center"
    },
});
