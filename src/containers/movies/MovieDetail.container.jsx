import React, { useState, useEffect } from "react";
import { View, StyleSheet, Modal, ScrollView, Text, Image } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { addMovie, fetchMovie, fetchMovies } from "../../actions/movies.actions";
import { CustomButton } from "../../components/buttons/CustomButton.component";
import { Field } from "../../components/Field.component";
import { Loading } from "../../screens/Loading";
import { Actors } from "./Actors.container";
import { VotingRow } from "./VotingRow.container";

const MovieDetail = ({ movie, user, close, group, closeAll, theme, search, updateSelected, selected }) => {
    const id = movie.id;

    const movies = useSelector((state) => state.data.movies);
    const dispatch = useDispatch();
    const [movieDetails, setDetails] = useState(movies.current);

    const onUpdateSelected = (value) => {
        updateSelected(value);
        close();
    }

    const saveMovie = async () => {
        closeAll();
        await dispatch(addMovie(id, null, group.id, user.id));
    }

    useEffect(async () => {
        setDetails(movie);
    }, []);

    const hasGenres = () => (movieDetails.genres && movieDetails.genres[0]) ||
                            (movieDetails.genreList &&
                                movieDetails.genreList.length);

    let content = <></>;
    if (movieDetails) {
        let genres = <></>;
        if (hasGenres()) {
            genres = <View style={style.container}>
                <Text style={style.sectionTitle}>Genres</Text>
                <View style={style.genres}>
                    {movieDetails.genreList && movieDetails.genreList.length && movieDetails.genreList.map((value, index) => {
                        return <Text style={[style.genre, { backgroundColor: theme.backgroundColor, elevation: 3, color: theme.bar.activeTint }]} key={index}>{value.value}</Text>
                    })}
                    {!movieDetails.genreList && movieDetails.genres && movieDetails.genres.length && movieDetails.genres[0] && movieDetails.genres.map((value, index) => {
                        return <Text style={[style.genre, { backgroundColor: theme.backgroundColor, elevation: 3, color: theme.bar.activeTint }]} key={index}>{value}</Text>
                    })}
                </View>
            </View>
        }

        let actors = <></>;
        if (movieDetails.actors || movieDetails.actorList || movieDetails.starList)
            actors = <View style={{ backgroundColor: theme.backgroundColor }}>
                <Text style={[style.title, { margin: 2, padding: 5, color: theme.bar.activeTint }]}>Cast</Text>
                {movieDetails.actorList && movieDetails.actorList.length && <Actors theme={theme} actors={movieDetails.actorList} />}
                {movieDetails.actors && movieDetails.actors.length && <Actors theme={theme} actors={movieDetails.actors} />}
                {movieDetails.starList && movieDetails.starList.length && <Actors theme={theme} actors={movieDetails.starList} />}
            </View>

        let directors = <></>;
        if (movieDetails.directors && movieDetails.directors.length)
            directors = <View style={{ backgroundColor: theme.backgroundColor }}>
                <Text style={[style.title, { margin: 2, padding: 5, color: theme.bar.activeTint }]}>Directors</Text>
                <Actors theme={theme} actors={movieDetails.directors} />
            </View>

        const detailsFields = [
            {content: movieDetails.title, title: "Title"},
            {content: movieDetails.year, title: "Release Year"},
            {content: movieDetails.description, title: "Description"},
            {content: movieDetails.runtimeStr, title: "Runtime"}
        ];

        let latestDefinedField;

        /* if "genres" are not displayed, we are in charge of the last border
           bottom hiding */
        if(!hasGenres()) {
            for(let i = detailsFields.length - 1; i >= 0; i--) {
                const field = detailsFields[i];

                if(field.content) {
                    latestDefinedField = field;
                    break;
                }
            }
        }

        const detailsFieldsNodes = [];

        for(let i = 0; i < detailsFields.length; i++) {
            const field = detailsFields[i];

            if(field.content) {
                const last = field == latestDefinedField;
                detailsFieldsNodes.push(
                    <Field key={i} title={field.title} content={field.content}
                        last={field == latestDefinedField}/>
                )
            }
        }

        content = (
            <>
                <ScrollView>
                    <View style={style.top}>
                        <View style={style.left}>
                            {detailsFieldsNodes}
                            {genres}
                        </View>
                        <Image style={style.poster}
                            source={{ uri: movieDetails.image || movieDetails.poster_url }}
                        />
                    </View>
                    {actors}
                    <View style={style.plotContainer}>
                        <Text style={style.plotTitle}>Plot</Text>
                        <Text style={style.plot}>{movieDetails.plot}</Text>
                    </View>
                    {directors}
                </ScrollView>
                {!search && <VotingRow theme={{ ...theme, custom: { paddingBottom: 10, paddingLeft: 5, paddingRight: 5, backgroundColor: theme.backgroundColor } }} setSelected={onUpdateSelected} selected={selected} />}
                {search && <CustomButton theme={theme} styleName="Save" text="Add movie to group" onPressButton={() => saveMovie()} />}
            </>

        );
    }
    return (
        <>
            <Loading theme={theme} isLoading={movies.loading} message={"Loading movie..."} />
            {content}
        </>
    );
}

export { MovieDetail };

const style = StyleSheet.create({
    left: {
        width: "60%"
    },
    poster: {
        width: 125,
        height: 200,
        margin: 10,
        borderRadius: 10
    },
    title: {
        width: "100%",
        fontSize: 24
    },
    top: {
        flexDirection: "row",
        justifyContent: "center"
    },
    genres: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        width: "70%"
    },
    genre: {
        padding: 5,
        borderRadius: 10,
        margin: 2
    },
    plotContainer: {
        paddingLeft: 10,
        paddingRight: 10
    },
    container: {
        flexDirection: "row",
        margin: 2,
        padding: 10,
        flexWrap: "wrap"
    },
    sectionTitle: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#3F3F3F"
    },
    plotTitle: {
        padding: 10,
        margin: 2,
        fontSize: 19,
        fontWeight: "bold",
        color: "#3F3F3F",
        borderBottomColor: "#DCDCDC",
        borderBottomWidth: 1,
    },
    plot: {
        padding: 5
    }
});