import {View, Text, TextInput, StyleSheet, Image, ScrollView} from "react-native";

import FormModal from "./FormModal";
import basicStyles from "../theme/basic_components_styles";
import {useState} from "react"

export default function (props) {
    const StarEmpty = require("../assets/star-empty.png")
    const StarFilled = require("../assets/star-filled.png")

    const [userRating, setUserRating] = useState(null)

    const submitRating = (rating) => {

    }

    return (
        <FormModal onRequestClose={props.onRequestClose}
                   visible={props.visible}
                   validateText="Add Movie">
            <ScrollView>
                <Image style={styles.movieImage}
                       source={{uri: props.image}}
                       accessibilityLabel="movie"/>
                <Text style={styles.movieTitle}>
                    {props.title}
                </Text>
                <Text>
                    <Text style={styles.labelDetail}>
                        Details :
                    </Text>
                    When it's discovered that the evil Emperor Palpatine did not die at the hands of Darth Vader, the
                    rebels must race against the clock to find out his whereabouts. Finn and Poe lead the Resistance to
                    put a stop to the First Order's plans to form a new Empire, while Rey anticipates her inevitable
                    confrontation with Kylo Ren. Warning: Some flashing-lights scenes in this film may affect
                    photosensitive viewers.
                </Text>
                <Text>
                    <Text style={styles.labelDetail}>
                        Directors :
                    </Text>
                    Quentin Tarantino
                </Text>
                <Text>
                    <Text style={styles.labelDetail}>
                        Genres :
                    </Text>
                    {props.description}
                </Text>
                <Text style={styles.catchText}>{props.children}</Text>
                <TextInput style={basicStyles.modalTextInput} placeholder="Thoughts of the creator ...."/>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                    }}>
                {Array(5)
                    .fill()
                    .map((v, i) => {
                        return (
                            <View
                                key={i}
                                style={{
                                    padding: 10,
                                }}
                                onPress={() => {
                                    setUserRating(i + 1)
                                    submitRating(i + 1)
                                }}
                            >
                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,
                                        resizeMode: "contain",
                                    }}
                                    source={userRating > i ? StarFilled : StarEmpty}
                                />
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </FormModal>
    )
}

const styles = StyleSheet.create({
    catchText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    movieImage: {
        width: "100%",
        maxWidth: 3000,
        height: 600,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: "#dddddd",
        borderWidth: 1
    },
    movieTitle: {
        textAlign: "center",
        fontWeight: "normal",
        fontSize: 40,
        fontWeight: "bold",
        padding: 10,
    },
    labelDetail: {
        padding: 3,
        fontStyle: "italic",
        fontSize: 15,
        marginRight: 5,
        textDecorationLine: "underline"
    }
});
