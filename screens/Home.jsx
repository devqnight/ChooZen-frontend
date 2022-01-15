import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable, Image} from "react-native";
import {useNavigation} from '@react-navigation/native';

import MovieModal from "../components/MovieModal";
import GroupModal from "../components/GroupModal";

export default function Home() {
    const [movieSearchModalVisible, setMovieSearchModalVisible] = useState(false);
    const [groupSelectionModalVisible, setGroupSelectionModalVisible] = useState(false);
    const [groupCreationModalVisible, setGroupCreationModalVisible] = useState(false);

    useNavigation();

    return (
        <View style={styles.mainView}>
            <Text style={styles.firstGroupInvitation}>
                You're not yet in a group?
            </Text>
            <Pressable style={styles.firstGroupInvitationButton} onPress={() => setGroupSelectionModalVisible(true)}>
                <Text style={styles.firstGroupInvitationButtonText}>Join a group</Text>
            </Pressable>
            <Pressable style={styles.firstGroupInvitationButton} onPress={() => setGroupCreationModalVisible(true)}>
                <Text style={styles.firstGroupInvitationButtonText}>Create a group</Text>
            </Pressable>
            <Pressable style={[styles.floatingButton]}
                onPress={() => setMovieSearchModalVisible(true)}>

                <Image style={styles.floatingButtonIcon}
                    source={require('../assets/plus.png')}/>
            </Pressable>
            <MovieModal visible={movieSearchModalVisible}
                onRequestClose={() => setMovieSearchModalVisible(false)}/>
            <GroupModal visible={groupSelectionModalVisible}
                onRequestClose={() => setGroupSelectionModalVisible(false)}>

                What's the group you want to join?
            </GroupModal>
            <GroupModal visible={groupCreationModalVisible}
                onRequestClose={() => setGroupCreationModalVisible(false)}>

                Give a name to your new group!
            </GroupModal>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
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
    firstGroupInvitation: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    firstGroupInvitationButton: {
        padding: 10,
        width: "100%",
        maxWidth: 200,
        marginTop: 20,
        backgroundColor: "orchid",
        borderRadius: 10,
        alignSelf: "center"
    },
    firstGroupInvitationButtonText: {
        textAlign: "center",
        color: "white",
        fontSize: 16
    }
});
