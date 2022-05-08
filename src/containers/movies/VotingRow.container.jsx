import React, {useState, useCallback} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CustomButton } from '../../components/buttons/CustomButton.component';

const VotingRow = (props) => {

    const voting = [
        {
            text:"- -",
            color: "#dd2323",
            value: 1
        },
        {
            text:"-",
            color: "#c75a00",
            value: 2
        },
        {
            text:"=",
            color: "#a37e00",
            value: 3
        },
        {
            text:"+",
            color: "#719800",
            value: 4
        },
        {
            text:"+ +",
            color: "#05ab2c",
            value: 5
        }
    ];

    const isSelected = useCallback((voted) => {
        let index = voting.map(vote => vote.value).indexOf(voted);
        if(props.selected === voted){
            return {backgroundColor: props.theme.bar.inactiveBackground, color: voting[index].color}
        }
        return {backgroundColor: voting[index].color, color: props.theme.bar.inactiveBackground};
    });

    return (
        <View style={[style.votingBar, props.theme.custom]}>
            {voting.map((rate, index) => (
                <CustomButton 
                    key={index}
                    onPressButton={() => props.setSelected(rate.value)}
                    text={rate.text}
                    theme={[props.theme,style.vote, isSelected(rate.value)]}
                    textStyle={[style.voteText, style.text, {color: isSelected(rate.value).color}]}
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