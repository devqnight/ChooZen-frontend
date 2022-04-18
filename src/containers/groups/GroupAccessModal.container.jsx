import {useState} from "react";
import {Text, TextInput, StyleSheet} from "react-native";

import { CancelConfirmModal } from "../common/CancelConfirmModal.container";
import basicStyles from "../../themes/basic_components_styles";

const GroupAccessModal = (props) => {
    const [groupName, setGroupName] = useState("");

    const onValidate = () => {
        props.onValidate(groupName);
    }

    return (
        <CancelConfirmModal onRequestClose={props.onRequestClose}
            visible={props.visible}
            validateText="Confirm"
            onValidate={onValidate}
            theme={props.theme}>

            <Text style={styles.catchText}>{props.children}</Text>
            <TextInput
                style={basicStyles.modalTextInput}
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
    }
});