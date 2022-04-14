import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import GroupInvitation from "../../containers/Group/GroupInvitation";
import GroupView from "../../containers/Group/GroupView";
import { Header } from '../../containers/common/Header';


export default function Group() {
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
            <Header title="Group" backgroundColor="orchid"/>
            {groups.length == 0 &&
            <GroupInvitation onNewGroup={onNewGroup}/>
            }
            {groups.length > 0 &&
            <GroupView groups={groups}/>
            }
        </>
    );
}