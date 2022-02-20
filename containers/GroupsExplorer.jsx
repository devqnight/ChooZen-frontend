import {Text, ScrollView, StyleSheet} from "react-native";

import FormModal from "../components/FormModal";

export default function(props) {
    return (
        <FormModal
            visible={props.visible}
            onRequestClose={props.onRequestClose}>

            <Text style={styles.pageTitle}>Select a group</Text>

            <ScrollView style={styles.scrollView}>
                {props.groupNames.map((groupName, index) => (
                    <Text
                        key={index}
                        onPress={() => props.onGroupSelected(index)}
                        style={styles.groupName}>

                        {groupName}
                    </Text>
                ))}
            </ScrollView>
        </FormModal>
    )
}

const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
        marginTop: 50,
        marginBottom: 50
    },
    scrollView: {
        flex: 1
    },
    groupName: {
        fontSize: 18,
        padding: 10
    }
});
