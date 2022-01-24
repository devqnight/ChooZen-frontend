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
        width: "100%",
        //backgroundColor: "#e0e0e0",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "5%",
        paddingTop: "5%",
        //paddingBottom: "5%",
        borderRadius: 10,
        alignContent: "center"
    },
    loginInputsText: {
        backgroundColor: "#e0e0e0",
        //marginTop: 10,
        width: "100%",
        //marginLeft: "5%",
        //marginRight:"5%",
        paddingLeft: "5%",
        paddingRight: "5%",
        //backgroundColor: "#fff",
        paddingTop: 15,
        borderRadius: 10
    },
    loginInputsButtons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "90%",
        //height: 50,
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: 10
    },
    loginInputsButton: {
        height: 50,
        marginTop: 10
    },
    loginErrorText: {
        marginLeft: "10%",
        color: "red"
    },
    registerHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        textAlign: "center",
        width: "100%",
        //marginTop: 15,
        padding: 15,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        //marginRight: "5%",
        //marginLeft: "5%",
        backgroundColor: "orchid"
    }, 
    registerInputsButtons: {
        //position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        width: "100%",
        //height: 50,
        padding: 15,
        //marginLeft: "5%",
        //marginRight: "5%",
        //marginTop: 10
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
    },
    registerInputsButton: {
        width: "45%"
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