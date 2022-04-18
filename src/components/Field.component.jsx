import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Field = (props) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>{props.title}</Text>
            <Text style={style.content}>{props.content}</Text>
        </View>
    );
}

export {Field};

const style = StyleSheet.create({
    container: {
        width: "98%",
        margin: 2,
        padding: 10,
        height: 45,
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
        fontSize: 16
    }
});