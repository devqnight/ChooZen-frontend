import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { FadedView } from "../../components/view/FadedView.component";

const MovieCard = (props) => {

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

    const [selected, setSelected] = useState(null);

    const selectVote = (value) => {
        setSelected(value);
    }

    const isSelected = useCallback((index) => {
        if(selected === index)
            return {backgroundColor: props.theme.bar.inactiveBackground, color: voting[index].color}
        return {backgroundColor: voting[index].color, color: props.theme.bar.inactiveBackground};
    });

    return (
        <View style={[style.cardContainer, {backgroundColor: props.theme.backgroundColor}]}>
            <FadedView color="#101010" height={20}></FadedView>
            <Image style={style.poster} 
                source={{uri: props.movie.image}}
            />
            <View style={style.infoContainer}>
                <FadedView color="#101010" height={50}>
                    <View style={style.dataContainer}>
                        <View style={style.primaryContainer}>
                            <Text style={[style.title, style.text]}>{props.movie.title}</Text>
                            <Text style={[style.year, style.text]}>{props.movie.description}</Text>
                        </View>
                        <View style={style.additionalContainer}>
                            <Text style={[style.text, style.score]}>4.5</Text>
                        </View>
                    </View>

                    <View style={[style.votingBar]}>
                        {voting.map((rate, index) => (
                            <TouchableOpacity key={index} style={[style.vote, isSelected(index) ]} onPress={() => selectVote(index)}>
                                <Text style={[style.voteText, style.text, {color: isSelected(index).color}]}>{rate.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </FadedView>
            </View>
        </View>
    );
}

export {MovieCard};

const style = StyleSheet.create({
    cardContainer: {
        height: "93%",
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
        //margin: 20,
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
        maxWidth: "80%",
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