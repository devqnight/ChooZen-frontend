import { StyleSheet } from 'react-native';

const containerStyles = StyleSheet.create({
    inputSection: {
        width: "100%",
    },
    inputSectionTitle: {
        marginLeft: 10,
        fontWeight: "700",
        fontSize: 16
    },
    idenditySectionNames: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    idenditySectionNamesInput: {
        width: "45%"
    }
});

export default containerStyles;