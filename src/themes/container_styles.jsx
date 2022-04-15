import { StyleSheet } from 'react-native';

const containerStyles = StyleSheet.create({
    inputSection: {
        width: "100%",
        height: 50,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        padding: 5,
        marginBottom: "5%"
    },
    inputSectionTitle: {
        fontSize: 10,
        color: "#a0a0a0",
        backgroundColor: "rgba(0,0,0,0)"
    },
    idenditySectionNames: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    idenditySectionNamesInput: {
        width: "45%"
    },
    headerStyle: {
        //height: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        padding: 10
    },
    headerTitleStyle: {
        alignSelf:"flex-start",
        color: "#FFF",
        textTransform: "capitalize",
        fontWeight: "600",
        fontSize: 20
    },
    headerButtonStyle: {
        alignSelf:"flex-end",
        color: "#FFF"
    }
});

export default containerStyles;