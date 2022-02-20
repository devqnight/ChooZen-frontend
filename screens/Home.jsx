import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable, Image} from "react-native";
import {useNavigation} from '@react-navigation/native';

import MovieModal from "../components/MovieModal";
import GroupInvitation from "../containers/GroupInvitation";
import GroupView from "../containers/GroupView";

export default function Home() {
    const [groups, setGroups] = useState([]);
    useNavigation();

    const onNewGroup = newGroupName => {
        const newGroups = [];

        for(let group of groups) {
            newGroups.push(group);
        }

        newGroups.push({name: newGroupName});
        setGroups(newGroups);
    }

    return (
        <>
            {groups.length == 0 &&
            <GroupInvitation onNewGroup={onNewGroup}/>
            }
            {groups.length > 0 &&
            <GroupView groups={groups}/>
            }
        </>
    );
}
