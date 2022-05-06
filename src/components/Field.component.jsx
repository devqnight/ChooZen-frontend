import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Field = ({title, content, theme}) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
            <Text style={style.content}>{content}</Text>
        </View>
    );
}

export {Field};

const style = StyleSheet.create({
    container: {
        width: "98%",
        margin: 2,
        padding: 10,
        maxHeight: 90,
        borderBottomColor: "#3F3F3F",
        borderBottomWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#3F3F3F"
    },
    content: {
        fontSize: 16,
        paddingLeft: 10,
        maxWidth: "73%",
        flexWrap: "wrap",
        textAlign: "right"
    }
});