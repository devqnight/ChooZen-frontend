import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import { Text, View } from "react-native";

import screenStyles from '../theme/screens_styles';

import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import {ScrollView} from "react-native-gesture-handler";
import MovieListe from "../components/MovieListe";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTimeout, setSearchTimeout] = useState();

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
            <View style={screenStyles.homeTitle}>
                <MovieListHeading heading='Movies' />
                <SearchBox setSearchValue={onSearchValueChange} />
            </View>
            <ScrollView>
                <MovieListe movies={movies}/>
            </ScrollView>
        </View>
    );
}