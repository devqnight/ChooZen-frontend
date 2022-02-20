import {useState} from "react";
import {Text, Pressable, Image, StyleSheet} from "react-native";

import GroupsExplorer from "../containers/GroupsExplorer";
import MovieModal from "../components/MovieModal";

export default function(props) {
    const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
    const [groupsExplorerVisible, setGroupsExplorerVisible] = useState(false);
    const [movieSearchModalVisible, setMovieSearchModalVisible] = useState(false);

    const onMovieChosen = movie => {
        setMovieSearchModalVisible(false);
    }

    const groupNames = [];
    for(let group of props.groups) {
        groupNames.push(group.name);
    }

    const onGroupSelected = groupIndex => {
        setGroupsExplorerVisible(false);
        setSelectedGroupIndex(groupIndex);
    }

    return (
        <>
            <Text
                style={styles.groupName}
                onPress={() => setGroupsExplorerVisible(true)}>

                {props.groups[selectedGroupIndex].name}
            </Text>
            <Pressable style={[styles.floatingButton]}
                onPress={() => setMovieSearchModalVisible(true)}>

                <Image style={styles.floatingButtonIcon}
                    source={require('../assets/plus.png')}/>
            </Pressable>
            <GroupsExplorer groupNames={groupNames}
                visible={groupsExplorerVisible}
                onRequestClose={() => setGroupsExplorerVisible(false)}
                onGroupSelected={onGroupSelected}/>
            <MovieModal visible={movieSearchModalVisible}
                onRequestClose={() => setMovieSearchModalVisible(false)}
                onMovieChosen={onMovieChosen}/>
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
    }
});
