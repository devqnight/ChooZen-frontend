import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export const SplashScreen = () => {
    return (
        <View style={styles.splashBody}>
            <Text style={styles.splashTitle}>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    splashBody: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    splashTitle: {
        fontSize: 32
    }
});