import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Icon } from "../../components/icons/Icon.component";

const Actor = ({actor, theme}) => {
    return (
        <View style={style.actor}>
            {actor.image && <Image source={{uri: actor.image}} style={style.icon}/>}
            {!actor.image && <Icon iconName={"account-circle"} height={100} color={theme.bar.activeTint} style={style.icon}/>}
            <Text style={[style.name, {color: theme.bar.activeTint}]}>{actor.name}</Text>
            {actor.asCharacter && <Text style={[style.character, {color: theme.bar.activeTint}]}>{actor.asCharacter.split("as ")[1]}</Text>}
        </View>
    );
}

const Actors = ({actors, theme}) => {

    return (
        <ScrollView horizontal={true} style={[style.container, {backgroundColor: theme.backgroundColor}]}>
            {actors.map((value, index) => {
                return <Actor key={index} actor={value} theme={theme} />
            })}
        </ScrollView>
    );
}

export {Actors};

const style = StyleSheet.create({
    container: {
    },
    icon: {
        height: 100,
        width: 100,
        borderRadius: 90
    },
    character: {
        fontSize: 16,
        overflow: "hidden",
        textAlign: "center",
        fontWeight: "bold"
    },
    name: {
        fontSize: 12,
        textAlign: "center"
    },  
    actor: {
        width: 125,
        padding: 5,
        margin: 5,
        alignItems: "center",
        backgroundColor: "rgba(10,10,10,0.2)",
        borderRadius: 10
    }
});