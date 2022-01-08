import React from 'react';
import { TextInput, View } from 'react-native';

export const SearchBox = (props) => {
    return (
        <View>
            <TextInput
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Type to search...'
            />
        </View>
    );
};
