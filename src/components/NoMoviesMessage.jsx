import {View, Text, StyleSheet} from "react-native";

const NoMoviesMessage = () => {
    return (
        <View style={styles.messageContainer}>
            <Text style={styles.noMoviesMessage}>No movies to display 🤔</Text>
        </View>
    )
}

const NoMoviesMessageExternStyles = StyleSheet.create({
    rootView: {
        flex: 1
    }
})

const styles = StyleSheet.create({
    messageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    noMoviesMessage: {
        fontSize: 18,
        color: "#777"
    }
});

export {NoMoviesMessage, NoMoviesMessageExternStyles};
