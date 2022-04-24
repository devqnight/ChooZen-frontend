import React, {useState} from "react";
import {View, StyleSheet, Modal, ScrollView, Text} from 'react-native';
import { Input } from "../../components/inputs/Input.component";
import { ErrorMsg } from "../../components/ErrorMsg.component";
import { Loading } from "../../screens/Loading";
import { ScrollMovieList } from "./ScrollMovieList.container";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../../actions/movies.actions";

const MovieSearch = (props) => {
    const movies = useSelector((state) => state.data.movies);
    const dispatch = useDispatch();

    const [searchStr, setSearchStr] = useState(null);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const fetch = async () => {
        await dispatch(searchMovies(searchStr));
    }

    return (
        <>
            <View>
                <Input  
                    title="Search for a movie..."
                    value={searchStr}
                    onChangeText={(text) => setSearchStr(text)}
                    style={{backgroundColor: props.theme.backgroundColor, color: "white"}}
                    fetch={fetch}
                />
                <ErrorMsg error={error} msg={errorMsg} />
            </View>
            {movies.search && movies.search.length > 0 && 
                <ScrollMovieList 
                    movies={movies.search}
                    theme={props.theme}
                    height={250}
                    close={props.close}
                />
            }
            <Loading theme={props.theme} isLoading={movies.loading ?? false} message={"Fetching search results..."} />
        </>
    );
}

export {MovieSearch};   

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