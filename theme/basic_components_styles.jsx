import { StyleSheet } from 'react-native';

const basicStyles = StyleSheet.create({
    basicInputView: {
        width: "100%",
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: "5%"
    },
    basicInput: {
        width: "100%",
        backgroundColor: "#f0f0f0",
        justifyContent: 'flex-start',
        padding: 10,
        borderRadius: 10
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: "yellow",
        height: "100%",
        width: "100%",
    },
    button_text: {
        textAlign: "center",
        textAlignVertical: "center"
    },
    buttonSave: {
        backgroundColor: "orchid"
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
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#e3e3e3",
        justifyContent: "space-between",
        marginBottom: "5%"
    },
    passwordInputIcon: {
        //textAlign: 'center',
        //textAlignVertical: 'center'
    },
    passwordInputTextInput: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: (10),
        marginRight: 10,
    }
});

export default basicStyles;