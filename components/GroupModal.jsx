import {useState} from "react";
import {Text, TextInput, StyleSheet} from "react-native";

import FormModal from "./FormModal";
import basicStyles from "../theme/basic_components_styles";

export default function(props) {
    const [groupName, setGroupName] = useState("");

    const onValidate = () => {
        props.onValidate(groupName);
    }

    return (
        <FormModal onRequestClose={props.onRequestClose}
            visible={props.visible}
            validateText="Confirm"
            onValidate={onValidate}>

            <Text style={styles.catchText}>{props.children}</Text>
            <TextInput
                style={basicStyles.modalTextInput}
                placeholder="Group name"
                onChangeText={setGroupName}/>
        </FormModal>
    )
}

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
