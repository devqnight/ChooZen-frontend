import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import Header from "../../containers/common/Header.container";
import { DefaultNoGroup } from "../../containers/groups/DefaultNoGroup.container";
import { GroupView } from "../../containers/groups/GroupView.container";

const Groups = () => {
    const theme = useSelector((state) => state.theme);
    const groups = useSelector((state) => state.data.groups);

    const hasGroup = groups.active || (groups.groups && groups.groups.length > 0) ? true : false;
    if(!hasGroup)
        return (
            <View>
                <Header title="Groups" />
                <DefaultNoGroup theme={theme} />
            </View>
        )

    return (
        <View>
            <Header title="Groups" />
            <GroupView data={groups} />
        </View>
    );
};

export default Groups;