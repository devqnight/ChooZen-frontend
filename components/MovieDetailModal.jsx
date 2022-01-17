import {Text, TextInput, StyleSheet, Image, ScrollView} from "react-native";

import FormModal from "./FormModal";
import basicStyles from "../theme/basic_components_styles";
import React from "react";


export default function(props) {
    //console.log(props)

    return (
        <FormModal onRequestClose={props.onRequestClose}
                   visible={props.visible}
                   validateText="Confirm">


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
                When it's discovered that the evil Emperor Palpatine did not die at the hands of Darth Vader, the rebels must race against the clock to find out his whereabouts. Finn and Poe lead the Resistance to put a stop to the First Order's plans to form a new Empire, while Rey anticipates her inevitable confrontation with Kylo Ren. Warning: Some flashing-lights scenes in this film may affect photosensitive viewers.
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
        </FormModal>
    )
}

const styles = StyleSheet.create({
    catchText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 100,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    movieImage: {
        width:"100%",
        height:550,
        borderRadius:4

    },
    movieTitle: {
        textAlign: "center",
        fontWeight: "normal",
        fontFamily: "Helvetica Neue, sans-serif",
        fontSize: 40,
        fontStyle:"bold",
        padding: 10,
    },
    labelDetail: {
        padding:3,
        fontStyle:"italic",
        fontSize:15,
        marginRight:5,
        textDecorationLine:"underline"
    }
});


/*export default function(props) {
    const [movies, setMovies] = useState([]);
    const [wasVisible, setWasVisible] = useState(false);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?i=tt0076759&apikey=ba857656`;

        const response = await fetch(url);
        const responseJson = await response.json();

}*/