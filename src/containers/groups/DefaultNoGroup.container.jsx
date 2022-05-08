import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { doCreateGroup, doJoinGroup, fetchGroups, updateGroup } from "../../actions/groups.actions";
import { GroupAccessModal } from "./GroupAccessModal.container";

const DefaultNoGroup = (props) => {
    const [groupSelectionModalVisible, setGroupSelectionModalVisible] = useState(false);
    const [groupCreationModalVisible, setGroupCreationModalVisible] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const groups = useSelector((state) => state.data.groups);
    
    const onNewGroup = async (text) => {
        setGroupCreationModalVisible(false);
        await dispatch(doCreateGroup(user.id, text));
    }

    const onJoinGroup = async (text) => {
        setGroupSelectionModalVisible(false);
        await dispatch(doJoinGroup(user.id, text));
    }

    const hasNoGroup = !groups.groups ? true : !groups.groups.length ? true : false;

    return (
        <View>
            {hasNoGroup && 
                <Text style={styles.firstGroupInvitation}>
                    You're not yet in a group?
                </Text>
            }
            <Text style={[styles.firstGroupInvitationButton, {backgroundColor: props.theme.backgroundColor, elevation: 3}]}
                onPress={() => setGroupSelectionModalVisible(true)}>

                Join a group
            </Text>
            <Text style={[styles.firstGroupInvitationButton, {backgroundColor: props.theme.backgroundColor, elevation: 3}]}
                onPress={() => setGroupCreationModalVisible(true)}>

                Create a group
            </Text>
            <GroupAccessModal theme={props.theme} visible={groupSelectionModalVisible}
                onRequestClose={() => setGroupSelectionModalVisible(false)}
                onValidate={(text) => onJoinGroup(text)}>
                    
                What's the group you want to join?
            </GroupAccessModal>
            <GroupAccessModal theme={props.theme} visible={groupCreationModalVisible}
                onRequestClose={() => setGroupCreationModalVisible(false)}
                onValidate={(text) => onNewGroup(text)}>

                Give a name to your new group!
            </GroupAccessModal>
        </View>
    )
};

export {DefaultNoGroup};

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
        borderRadius: 10,
        alignSelf: "center",
        textAlign: "center",
        color: "white",
        fontSize: 16
    }
})