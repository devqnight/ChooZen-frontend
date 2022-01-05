import { StyleSheet } from 'react-native';

const screenStyles = StyleSheet.create({
    loginScreen: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    loginHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        textAlign: "center",
        width: "100%",
        height: 200,
        marginTop: 50,
    },
    loginAppTitle: {
        fontSize: 32
    },
    loginTitle: {
        fontSize: 28
    },
    loginInputs: {
        width: "90%",
        backgroundColor: "#e0e0e0",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "5%",
        paddingBottom: "5%",
        borderRadius: 10
    },
    loginInputsText: {
        marginTop: "5%",
        width: "90%",
        marginLeft: "5%",
        marginRight:"5%",
        //backgroundColor: "#fff",
        paddingTop: 5,
        borderRadius: 10
    },
    loginInputsButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "90%",
        height: 50,
        marginLeft: "5%",
        marginRight: "5%"
    },
    home: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    homeTitle: {
        marginTop:150,
        alignItems: "center",
        textAlign: "center"
    },
    homeLogout: {
        height:60,
        width: "80%",
        marginRight: "10%",
        marginLeft: "10%",
        marginTop: "10%"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ffffff',
    }
});

export default screenStyles;