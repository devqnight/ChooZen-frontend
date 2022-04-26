import { StyleSheet } from 'react-native';

const basicStyles = StyleSheet.create({
    dateInputView: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    basicInputView: {
        width: "100%",
        justifyContent: 'center',
        marginBottom: "5%"
    },
    basicInput: {
        width: "100%",
        justifyContent: 'flex-start',
        padding: 5,
        borderRadius: 10,
        zIndex: 100
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#e0e0e0",
        borderWidth: 0,
        height: 45,
        width: "100%",
    },
    buttonDate: {
        justifyContent: "center",
        alignContent: "center",
        //backgroundColor: "orchid",
        height: 30,
        width: 30,
        marginLeft: 15
    },
    button_text: {
        textAlign: "center",
        textAlignVertical: "center"
    },
    buttonClose: {
        backgroundColor: "red"
    },
    textSave: {
        fontSize: 16,
        color: "white"
    },
    textClose: {
        fontSize: 16,
        color: "white"
    },
    passwordInput: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: 4,
        justifyContent: "space-between",
        marginBottom: "5%"
    },
    passwordInputTextInput: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: (10),
        marginRight: 10,
    },
    modalTextInput: {
        fontSize: 18,
        padding: 10,
        backgroundColor: "#eeeeee",
        borderRadius: 10,
        maxWidth: 400,
        width: "100%",
        alignSelf: "center"
    }
});

export default basicStyles;
