import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Loading = (props) => {
    return (
        <>
            {props.isLoading && 
                <View style={style.loadingScreen}>
                    <Text style={[style.appTitle, {color: props.theme.accentColor}]}>{props.message}</Text>
                </View>
            }
        </>
    );
}

export {Loading};

const style = StyleSheet.create({
    appTitle: {
        fontSize: 38,
        fontWeight: "bold"
    },
    loadingScreen: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(150,150,150,0.8)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});
