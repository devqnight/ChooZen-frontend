import {useEffect, useState} from "react";
import {Text, View, Pressable, Image, StyleSheet, ScrollView} from "react-native";

import GroupsExplorer from "../containers/GroupsExplorer";
import MovieSearchModal from "../containers/MovieSearchModal";

import SelectDropdown from 'react-native-select-dropdown'
import GroupDetailModal from "../containers/GroupDetailModal";

//En attendant movies dans la bdd pour démonstration
const API = "https://imdb-api.com/en/API/SearchMovie/k_x0kc5v5x/Wars"


export default function(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch (API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
        });
    }, []);




    const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
    const [groupsExplorerVisible, setGroupsExplorerVisible] = useState(false);
    const [movieSearchModalVisible, setMovieSearchModalVisible] = useState(false);
    const [groupSelectionModalVisible, setGroupSelectionModalVisible] = useState(false);

    const onMovieChosen = movie => {
        setMovieSearchModalVisible(false);
    }

    const groupNames = [];
    for(let group of props.groups) {
        groupNames.push(group.name);
    }

    //En attendant groupe dans la bdd pour la démonstration
    groupNames.push("Famille");
    groupNames.push("LP GL");
    groupNames.push("Groupe Ciné");

    const onGroupSelected = groupIndex => {
        setGroupsExplorerVisible(false);
        setSelectedGroupIndex(groupIndex);
    }

    return (
        <>
            <SelectDropdown
                data={groupNames}
                defaultValueByIndex={0}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                }}
                defaultButtonText={"Select Group"}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
                buttonStyle={styles.firstGroupInvitationButton}
                buttonTextStyle={styles.dropdown2BtnTxtStyle}
                dropdownIconPosition={"right"}
                dropdownStyle={styles.dropdown2DropdownStyle}
                rowStyle={styles.dropdown2RowStyle}
                rowTextStyle={styles.dropdown2RowTxtStyle}
            />
            {/*<Text*/}
            {/*    style={styles.groupName}*/}
            {/*    onPress={() => setGroupsExplorerVisible(true)}>*/}

            {/*    {props.groups[selectedGroupIndex].name}*/}
            {/*</Text>*/}
            <View style={styles.buttonLine}>
                <Pressable style={[styles.firstGroupInvitationButton,styles.bottomLeftButton]} onPress={() => setGroupSelectionModalVisible(true)}>
                    <Text style={styles.firstGroupInvitationButtonText}>Group Details</Text>
                </Pressable>
                <Pressable style={styles.firstGroupInvitationButton} onPress={() => setMovieSearchModalVisible(true)}>
                    <Text style={styles.firstGroupInvitationButtonText}>Group Movie</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.list}
                        contentContainerStyle={styles.listContentContainer}>
                {movies.map((movie, index) => (
                    <Pressable key={index} style={styles.movie}>

                        <Image style={styles.movieImage}
                               source={{uri: movie.image}}
                               accessibilityLabel="movie"/>

                        <View style={styles.movieSide}>
                            <Text style={[styles.movieTitle]}>
                                {movie.title}
                            </Text>
                            <Text style={styles.movieDescription}>
                                {movie.description}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
            <Pressable style={[styles.floatingButton]}
                onPress={() => setMovieSearchModalVisible(true)}>

                <Image style={styles.floatingButtonIcon}
                    source={require('../assets/plus.png')}/>
            </Pressable>
            <GroupsExplorer groupNames={groupNames}
                visible={groupsExplorerVisible}
                onRequestClose={() => setGroupsExplorerVisible(false)}
                onGroupSelected={onGroupSelected}/>
            <MovieSearchModal visible={movieSearchModalVisible}
                onRequestClose={() => setMovieSearchModalVisible(false)}
                onMovieChosen={onMovieChosen}/>
            <GroupDetailModal visible={groupSelectionModalVisible}
                         onRequestClose={() => setGroupSelectionModalVisible(false)}>

            </GroupDetailModal>

        </>
    )
}

const styles = StyleSheet.create({
    groupName: {
        fontSize: 20,
        padding: 10
    },
    floatingButton: {
        width: 55,
        height: 55,
        position: "absolute",
        bottom: 20,
        right: 20,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orchid"
    },
    floatingButtonIcon: {
        width: 30,
        height: 30
    },
    dropdown2BtnStyle: {
        width: "80%",
        height: 50,
        backgroundColor: "#444",
        borderRadius: 8,
    },
    dropdown2BtnTxtStyle: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
    },
    dropdown2DropdownStyle: { backgroundColor: "#444" },
    dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
    dropdown2RowTxtStyle: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
    },
    firstGroupInvitationButton: {
        padding: 10,
        width: "100%",
        maxWidth: 180,
        marginTop: 20,
        backgroundColor: "orchid",
        borderRadius: 10,
        alignSelf: "center",
    },
    buttonLine: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "center",

    },
    bottomLeftButton: {
        marginRight: 10
    },
    firstGroupInvitationButtonText: {
    textAlign: "center",
        color: "white",
        fontSize: 16
    },
    list: {
        marginTop: 10
    },
    listContentContainer: {
        alignItems: "center"
    },
    movie: {
        width: "100%",
        maxWidth: 800,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: "#dddddd",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    movieImage: {
        width: 60,
        height: 90,
        marginEnd: 10
    },
    movieSide: {
        flex: 1
    },
    movieTitle: {
        fontSize: 18,
        marginBottom: 5
    },
    movieDescription: {
        fontSize: 14
    }
});
