import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import Header from "../../containers/common/Header.container";
import { DefaultNoGroup } from "../../containers/groups/DefaultNoGroup.container";

const Home = () => {
    const theme = useSelector((state) => state.theme);
    const groups = useSelector((state) => state.groups);

    const hasGroup = groups.active || (groups.groups && groups.groups.length > 0) ? true : false;
    if(!hasGroup)
        return (
            <View>
                <Header title="Home" />
                <DefaultNoGroup theme={theme} />
            </View>
        )

    return (
        <View>
            <Header title="Home" />
            <Text>List of movies</Text>
        </View>
    );
};

export default Home;