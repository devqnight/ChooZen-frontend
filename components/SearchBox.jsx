import React from 'react';
import { TextInput, View } from 'react-native';

export const SearchBox = (props) => {
    return (
        <View>
            <TextInput
                value={props.value}
                onChangeText={text => props.setSearchValue(text)}
                placeholder='Type to search...'
            />
        </View>
    );
};
