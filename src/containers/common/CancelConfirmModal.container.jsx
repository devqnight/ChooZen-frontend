import React from "react";
import {View, Modal, Text, StyleSheet} from "react-native";

const CancelConfirmModal = (props) => {
    return (
        <Modal animationType="slide"
            transparent={false}
            visible={props.visible}
            onRequestClose={props.onRequestClose}>

            <View style={styles.modalView}>
                <View style={styles.content}>
                    {props.children}
                </View>
                <View style={styles.bottomButtons}>
                    <Text
                        style={[styles.bottomButton, {backgroundColor: props.theme.backgroundColor}]}
                        onPress={props.onRequestClose}>

                        Cancel
                    </Text>

                    { props.onValidate !== undefined &&
                        <Text style={[styles.bottomButton, styles.bottomRightButton, {backgroundColor: props.theme.backgroundColor}]}
                            onPress={props.onValidate}>

                            {props.validateText}
                        </Text>
                    }
                </View>
            </View>
        </Modal>
    );
};

export {CancelConfirmModal};

const styles = StyleSheet.create({
    modalView: {
        height: "100%",
        padding: 10,
        backgroundColor: "white"
    },
    content: {
        flex: 1
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 10
    },
    bottomButton: {
        borderRadius: 20,
        backgroundColor: "orchid",
        flex: 1,
        padding: 10,
        maxWidth: 200,
        color: "white",
        textAlign: "center"
    },
    bottomRightButton: {
        marginStart: 10
    }
})