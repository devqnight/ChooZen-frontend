import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector } from "react-redux";

export const SplashScreen = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <View style={styles.splashBody}>
            <View style={styles.content}>
                <Text style={styles.splashTitle}>Choo<Text style={[styles.zen, {color: theme.accentColor}]}>ZEN</Text></Text>
                <Image style={styles.spinner} source={require('../../assets/spinner.gif')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    splashBody: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    spinner: {
        width: 60,
        height: 60,
        opacity: 0.4
    },  
    splashTitle: {
        fontSize: 50,
        color: "#aaa"
    },
    zen: {
        fontWeight: "bold"
    }
});