import React from 'react';
import {View, Text} from 'react-native';

export const MovieListHeading = (props) => {
    return (
        <View>
            <Text>{props.heading}</Text>
        </View>
    );
};
