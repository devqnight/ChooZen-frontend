import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Field = ({title, content, last}) => {
    const containerStyles = [style.container];

    if(last != true) {
        containerStyles.push(style.notLastContainer);
    }

    return (
        <View style={containerStyles}>
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    notLastContainer: {
        borderBottomColor: "#DCDCDC",
        borderBottomWidth: 1,
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
        textAlign: "right",
        color: "#3F3F3F"
    }
});