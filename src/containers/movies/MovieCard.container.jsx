import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { FadedView } from "../../components/view/FadedView.component";
import { VotingRow } from "./VotingRow.container";
import { ModalWithHeader } from "../common/ModalWithHeader.container";
import { MovieDetail } from "./MovieDetail.container";

const MovieCard = (props) => {

    const [selected, setSelected] = useState(props.movie.note || null);
    const [visible, setVisible] = useState(false);

    const onRequestClose = () => {
        setVisible(false);
    }

    const updateSelected = (value) => {
        setSelected(value);
        props.onUpdate(value, props.movie);
    }

    const openModal = () => {
        setVisible(true);
    }

    return (
        <>
            <View style={[style.cardContainer, {backgroundColor: props.theme.backgroundColor}]}>
                <Pressable
                    onPress={() => openModal()}
                >
                    <FadedView color="#101010" height={20}></FadedView>
                    <Image style={style.poster} 
                        source={{uri: props.movie.image || props.movie.poster_url}}
                    />    
                    <View style={style.infoContainer}>
                        <FadedView color="#101010" height={50}>
                            <View style={style.dataContainer}>
                                <View style={style.primaryContainer}>
                                    <Text style={[style.title, style.text]}>{props.movie.title}</Text>
                                    <Text style={[style.year, style.text]}>{props.movie.description}</Text>
                                </View>
                                <View style={style.additionalContainer}>
                                    <Text style={[style.text, style.score]}>{props.movie.average_note || ""}</Text>
                                </View>
                            </View>

                            {!props.search && <VotingRow setSelected={updateSelected} selected={selected} theme={props.theme} />}
                        </FadedView>
                    </View>
                </Pressable>
            </View>
            <ModalWithHeader 
                movie={true} 
                visible={visible} 
                setVisible={() => setVisible(false)} 
                content={
                    <MovieDetail 
                        user={props.user}
                        theme={props.theme}
                        close={onRequestClose}
                        group={props.group}
                        movie={props.movie}
                        search={props.search}
                        updateSelected={updateSelected}
                        selected={selected}
                        closeAll={() => {props.closeAll()}}
                    />
                }
            />
        </>
    );
}

export {MovieCard};

const style = StyleSheet.create({
    cardContainer: {
        height: "95%",
        width: "95%",
        borderRadius: 10,
        elevation: 4
    },
    abovePoster: {
        height: 10,
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: "rgba(10,10,10,0.6)",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    poster: {
        width:"auto",
        height: "100%",
        borderRadius: 10
    },
    infoContainer: {
        position: "absolute",
        backgroundColor: "rgba(10,10,10,0.6)",
        width: "100%",
        bottom: 0,
        left: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10
    },
    primaryContainer: {
        width: "80%"
    },
    text: {
        color: "#FFF"
    },
    dataContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }, 
    title: {
        fontSize: 24,
        fontWeight: "bold",
        maxWidth: "100%",
        maxHeight: 65,
        overflow: "hidden"
    },
    year: {
        fontSize: 24,
        maxHeight: 30,
        maxWidth: "80%"
    },
    score: {
        fontSize: 32,
        color: "#FFFF00"
    },
    votingBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10
    },
    vote: {
        width: "17%",
        height: 40,
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        elevation: 4
    },
    voteText: {
        fontSize: 30
    }
});