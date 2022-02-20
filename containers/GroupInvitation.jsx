import {useState} from "react";
import {View, Text, StyleSheet} from "react-native";

import GroupModal from "../components/GroupModal";

export default function(props) {
    const [groupSelectionModalVisible, setGroupSelectionModalVisible] = useState(false);
    const [groupCreationModalVisible, setGroupCreationModalVisible] = useState(false);

    return (
        <View>
            <Text style={styles.firstGroupInvitation}>
                You're not yet in a group?
            </Text>
            <Text style={styles.firstGroupInvitationButton}
                onPress={() => setGroupSelectionModalVisible(true)}>

                Join a group
            </Text>
            <Text style={styles.firstGroupInvitationButton}
                onPress={() => setGroupCreationModalVisible(true)}>

                Create a group
            </Text>
            <GroupModal visible={groupSelectionModalVisible}
                onRequestClose={() => setGroupSelectionModalVisible(false)}
                onValidate={props.onNewGroup}>

                What's the group you want to join?
            </GroupModal>
            <GroupModal visible={groupCreationModalVisible}
                onRequestClose={() => setGroupCreationModalVisible(false)}
                onValidate={props.onNewGroup}>

                Give a name to your new group!
            </GroupModal>
        </View>
    )
}

const styles = StyleSheet.create({
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
        alignSelf: "center",
        textAlign: "center",
        color: "white",
        fontSize: 16
    }
})
