import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
import React, { useEffect,useState } from 'react';
import { Text, View } from "react-native";

import screenStyles from '../theme/screens_styles';

import { getUser, logOut } from '../utils/auth';
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import {ScrollView} from "react-native-gesture-handler";
import MovieListe from "../components/MovieListe";


export default function Home() {

    const navigation = useNavigation();

    const [login, setLogin] = useState('');

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ba857656`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);


    getUser().
        then((result) => {
            setLogin(result);
        })
        .catch((e) => {
            console.error(e);
        });

    return (
        <View style={screenStyles.container}>
            <View style={screenStyles.homeTitle}>
                <MovieListHeading heading='Movies' />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </View>
            <ScrollView>
                <MovieListe
                    movies={movies}
                />
            </ScrollView>
        </View>
    );
}