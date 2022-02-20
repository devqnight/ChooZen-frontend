import {View, Modal, Text, StyleSheet} from "react-native";

/* Ce composant est un modal avec juste 2 boutons "cancel" et "valider" en bas.
 * Si la propriété "onValidate" n'est pas renseignée, seul le bouton "cancel"
 * s'affiche.
 *
 * propriétés :
 *   onRequestClose : identique au composant natif Modal
 *   visible : identique au composant natif Modal
 *   validateText : texte à afficher dans le bouton de validation
 *   onValidate : callback appelé quand l'utilisateur clique sur le bouton
 *                de validation
 */

export default function(props) {
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
                        style={styles.bottomButton}
                        onPress={props.onRequestClose}>

                        Cancel
                    </Text>

                    { props.onValidate !== undefined &&
                        <Text style={[styles.bottomButton, styles.bottomRightButton]}
                            onPress={props.onValidate}>

                            {props.validateText}
                        </Text>
                    }
                </View>
            </View>
        </Modal>
    );
}

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
