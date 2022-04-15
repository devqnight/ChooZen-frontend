import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, Text } from 'react-native';
import { useSelector } from "react-redux";

const Registration = () => {
    const auth = useSelector((state) => state.auth);
    const nav = useNavigation();

    return (
        <ScrollView >
            
        </ScrollView>
    );
};

export default Registration;