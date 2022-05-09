import {useState} from "react";
import {Text, TextInput, StyleSheet} from "react-native";

import { CancelConfirmModal } from "../common/CancelConfirmModal.container";

const GroupAccessModal = (props) => {
    const [groupName, setGroupName] = useState("");

    const onValidate = () => {
        props.onValidate(groupName);
    }

    return (
        <CancelConfirmModal onRequestClose={props.onRequestClose}
            visible={props.visible}
            validateText="Confirm"
            onValidate={() => onValidate()}
            theme={props.theme}>

            <Text style={styles.catchText}>{props.children}</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Group name"
                onChangeText={setGroupName}/>
        </CancelConfirmModal>
    )
}

export {GroupAccessModal};

const styles = StyleSheet.create({
    catchText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 100,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    textInput: {
        fontSize: 18,
        padding: 10,
        backgroundColor: "#eeeeee",
        borderRadius: 10,
        maxWidth: 400,
        width: "100%",
        alignSelf: "center"
    }
});