import React, {useState, useCallback} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CustomButton } from '../../components/buttons/CustomButton.component';

const VotingRow = (props) => {

    const voting = props.votes;

    const isSelected = useCallback((index) => {
        if(props.selected === index)
            return {backgroundColor: props.theme.bar.inactiveBackground, color: voting[index].color}
        return {backgroundColor: voting[index].color, color: props.theme.bar.inactiveBackground};
    });

    return (
        <View style={[style.votingBar, props.theme.custom]}>
            {voting.map((rate, index) => (
                <CustomButton 
                    key={index}
                    onPressButton={() => props.setSelected(index)}
                    text={rate.text}
                    theme={[props.theme,style.vote, isSelected(index)]}
                    textStyle={[style.voteText, style.text, {color: isSelected(index).color}]}
                />
            ))}
        </View>
    );
}

export {VotingRow};

const style = StyleSheet.create({
    votingBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10
    },
    vote: {
        width: "17%",
        height: 40,
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        elevation: 4
    },
    voteText: {
        fontSize: 30
    }
});