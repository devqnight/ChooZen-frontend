import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text,View, TextInput, StyleSheet, Image} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteGroup } from "../../actions/groups.actions";
import { Field } from "../../components/Field.component";
import { TouchableIcon } from "../../components/icons/TouchableIcon.component";

const GroupDetail = ({userId}) => {

    const groups = useSelector((state) => state.data.groups.groups);
    const group = useSelector((state) => state.data.groups.active);
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const navigator = useNavigation();

    const isOwner = group.creator_infos ? userId == group.creator_infos.id : false;

    const onDelete = async () => {
        await dispatch(deleteGroup(userId, group.id, groups));
        navigator.navigate("Home");
    }

    const membersFields = [];

    for(let i = 0; i < group.members.length - 1; i++) {
        const username = group.members[i].username;
        memberFields.push(<Field key={i} title="" content={username}/>);
    }

    if(group.members.length > 0) {
        const lastMemberIndex = group.members.length - 1;
        const lastMemberUsername = group.members[lastMemberIndex].username;

        membersFields.push(<Field key={lastMemberIndex} title="" content={lastMemberUsername} last={true}/>);
    }

    return (
        <View style={styles.mainView}>
            {group.creator_infos && <View>
                {isOwner && 
                    <>
                        <View style={[ styles.sectionBar, {color: theme.bar.activeTint, backgroundColor: theme.backgroundColor}]}>
                            <Text style={[styles.deleteTitle,{color: theme.bar.activeTint, backgroundColor: theme.backgroundColor}]}>Delete group</Text>
                            <TouchableIcon 
                                height={32}
                                color={theme.bar.activeTint}
                                iconName="trash-can"
                                onTouch={() => onDelete()}
                            />
                        </View>
                        <Field title="Group id" content={group.id}/>
                    </>
                }
                <Field title="Group" content={group.title} />
                <Field title="Owner" content={group.creator_infos.username} last={true}/>
                
                <View>
                    <Text style={[styles.sectionTitle, {color: theme.bar.activeTint, backgroundColor: theme.backgroundColor}]}>Members : </Text>
                    {membersFields}
                </View>
            </View>}
        </View>
    )
}

export {GroupDetail};

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
    },
    profile: {
        width: 70,
        height: 70,
    }
    ,sectionTitle: {
        fontSize: 18,
        padding: 8,
        fontWeight: "bold"
    },
    sectionBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 10
    },
    deleteTitle: {
        fontSize: 16,
        fontWeight: "bold"
    },  
    section: {
        backgroundColor: "#EDEDED"
    },
});