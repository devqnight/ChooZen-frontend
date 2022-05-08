import React, { useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import Header from "../../containers/common/Header.container";
import { DefaultNoGroup } from "../../containers/groups/DefaultNoGroup.container";
import { GroupView } from "../../containers/groups/GroupView.container";
import { ModalWithHeader } from "../../containers/common/ModalWithHeader.container";

const Groups = () => {
    const theme = useSelector((state) => state.theme);
    const groups = useSelector((state) => state.data.groups);
    const [showModal, setShowModal] = useState(false);

    const hasGroup = groups.active || (groups.groups && groups.groups.length > 0) ? true : false;
    if(!hasGroup)
        return (
            <View>
                <Header title="Groups" />
                <DefaultNoGroup theme={theme} />
            </View>
        )


    const onRequestClose = () => {
        setShowModal(false);
    }

    return (
        <View style={{height: "66%"}}>
            <Header title="Groups" onTouch={() => setShowModal(true)} />
            <GroupView data={groups} />
            <ModalWithHeader
                setVisible={setShowModal}
                visible={showModal}
                titleModal="Join / Create a group"
                theme={theme}
                onTouch={() => onRequestClose()}
                content={
                    <DefaultNoGroup 
                        theme={theme}
                    />
                }
            />
        </View>
    );
};

export default Groups;