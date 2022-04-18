import {Text,View, TextInput, StyleSheet, Image} from "react-native";

import React from "react";

export default function(props) {
    return (
        <View style={styles.mainView}>
            <View style={styles.boxProfil}>
                <Image style={styles.profile}
                       source={require('../../../assets/profil.png')}/>
                <Text>Profile Picture</Text>
            </View>
            <View style={styles.boxOwner}>
                <Text>Owner :</Text>
                <Text>Pseudo</Text>
            </View>
            <View style={styles.boxMember}>
                <Text>Member 1</Text>
                <Text>Member 2</Text>
                <Text>Member 3</Text>
                <Text>Member 4</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 10
    },
    boxProfil: {
        top:25,
    },
    boxOwner: {
        left:130,
        top: -45,
    },
    boxMember: {
        top:100,
    },
    profile: {
        width: 70,
        height: 70,
    },
});