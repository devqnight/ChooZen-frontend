import React, { useState, useEffect } from "react";
import {View, StyleSheet, Modal, ScrollView, Text, Image} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { addMovie, fetchMovie } from "../../actions/movies.actions";
import { CustomButton } from "../../components/buttons/CustomButton.component";
import { Field } from "../../components/Field.component";
import { Loading } from "../../screens/Loading";
import { Actors } from "./Actors.container";
import { VotingRow } from "./VotingRow.container";
import { store } from "../../store";

const MovieDetail = (props) => {

    const id = props.movie.id;

    const movies = useSelector((state) => state.data.movies);
    const dispatch = useDispatch();
    const [movieDetails, setDetails] = useState(movies.current);

    const [selected, setSelected] = useState(null);
    const updateSelected = (value) => {
        if(selected == value)
            setSelected(null);
        else setSelected(value);
    }

    const saveMovie = async () => {
        dispatch(addMovie(id, null, props.group.active, props.user.login));
        props.closeAll();
    }

    useEffect(async () => {
        if(!props.search){
            await dispatch(fetchMovie(id, props.user.id));
            setDetails(store.getState().data.movies.current);
        } else {
            setDetails(props.movie);
        }
    },[]);

    let content=<></>;
    if(movieDetails)
        content = (
            <>
                <ScrollView>
                    <View style={style.top}>
                        <View style={style.left}>
                            <Field title="Title" content={movieDetails.title} theme={props.theme} />
                            {movieDetails.year && <Field title="Release Year" content={movieDetails.year} theme={props.theme} />}
                            {movieDetails.description && <Field title="Description" content={movieDetails.description} theme={props.theme} />}
                            {movieDetails.runtimeStr && <Field title="Runtime" content={movieDetails.runtimeStr} theme={props.theme} />}
                            {movieDetails.genreList && <View style={style.container}>
                                <Text style={style.sectionTitle}>Genres</Text>
                                <View style={style.genres}>
                                    {movieDetails.genreList.map((value, index) => {
                                        return <Text style={[style.genre, {backgroundColor: props.theme.backgroundColor, elevation: 3, color: props.theme.bar.activeTint}]} key={index}>{value.value}</Text>
                                    })}
                                </View>
                            </View>}
                        </View>
                        <Image style={style.poster} 
                            source={{uri: movieDetails.image}}
                        />
                    </View>
                    {movieDetails.actorList && <View style={{backgroundColor: props.theme.backgroundColor}}>
                        <Text style={[style.title, {margin:2, padding: 5,color: props.theme.bar.activeTint}]}>Cast</Text>
                        <Actors theme={props.theme} actors={movieDetails.actorList} />
                    </View>}
                    {!movieDetails.actorList && movieDetails.starList && <View style={{backgroundColor: props.theme.backgroundColor}}>
                        <Text style={[style.title, {margin:2, padding: 5,color: props.theme.bar.activeTint}]}>Stars</Text>
                        <Actors theme={props.theme} actors={movieDetails.starList} />
                    </View>}
                    <View style={style.plotContainer}>
                        <Text style={style.plotTitle}>Plot</Text>
                        <Text style={style.plot}>{movieDetails.plot}</Text>
                    </View>
                    {movieDetails.directorList && <View style={{backgroundColor: props.theme.backgroundColor}}>
                        <Text style={[style.title, {margin:2, padding: 5,color: props.theme.bar.activeTint}]}>Directors</Text>
                        <Actors theme={props.theme} actors={movieDetails.directorList} />
                    </View> }           
                </ScrollView>
                {!props.search && <VotingRow theme={{...props.theme, custom: {paddingBottom: 10, paddingLeft: 5, paddingRight: 5, backgroundColor: props.theme.backgroundColor}}} votes={voting} setSelected={updateSelected} selected={selected} />}
                {props.search && <CustomButton theme={props.theme} styleName="Save" text="Add movie to group" onPressButton={() => saveMovie()}/>}
            </>
            
        );

    return (
        <>
            <Loading theme={props.theme} isLoading={movies.loading} message={"Loading movie..."} />
            {content}
        </>
    );
}

export {MovieDetail};

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
        borderBottomColor: "#3F3F3F",
        borderBottomWidth: 1,
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
        borderBottomColor: "#3F3F3F",
        borderBottomWidth: 1,
    },
    plot: {
        padding: 5
    }
});

const voting = [
    {
        text:"- -",
        color: "#dd2323",
        value: 0
    },
    {
        text:"-",
        color: "#c75a00",
        value: 1
    },
    {
        text:"=",
        color: "#a37e00",
        value: 2
    },
    {
        text:"+",
        color: "#719800",
        value: 3
    },
    {
        text:"+ +",
        color: "#05ab2c",
        value: 4
    }
];