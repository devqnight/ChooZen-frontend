import React, {useState} from "react";
import {View, StyleSheet, Modal, ScrollView, Text} from 'react-native';
import { MovieDetail } from "./MovieDetail.container";
import { Input } from "../../components/inputs/Input.component";
import { MovieCard } from "./MovieCard.container";
import { ErrorMsg } from "../../components/ErrorMsg.component";
import { searchMovies } from "../../apis/api-movies";
import { Loading } from "../../screens/Loading";

const MovieSearch = (props) => {

    const [searchStr, setSearchStr] = useState(null);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const fetch = async () => {
        setLoading(true)
        try {
            let search = await searchMovies({searchValue: searchStr});
            if(search.errorMessage)
                throw Error(search.errorMessage);
            if(search.results)
                setMovies(search.results);
            else
                throw Error("No result for your search : " + searchStr);
        } catch (error) {
            console.warn(error);
            setError(true);
            setErrorMsg(error);
        }
        setLoading(false);
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
            {movies && movies.length > 0 && 
                <ScrollView style={style.list}>
                    {movies.map((movie, index) => {
                        return <View style={style.container}>
                            <MovieCard 
                                search={true}
                                theme={props.theme}
                                movie={movie}
                                key={index}
                                closeAll={props.close}
                            />
                        </View>
                    })}
                </ScrollView>
            }
            <Loading theme={props.theme} isLoading={loading} message={"Fetching search results..."} />
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