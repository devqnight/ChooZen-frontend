import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import basicStyles from '../../theme/basic_components_styles';

const DateInput = (props) => {

    const dateTemp = props.date;
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const toggleDatePicker = () => {
        setShow(!show);
    }

    const openDatePicker = () => {
        setShow(true);
    }

    const closeDatePicker = () => {
        setShow(false);
    }

    const getDate = () => {
        const tempDate = dateTemp;
        const temp = tempDate.toString().split(" ");
        return dateTemp !== '' ? `${temp[0]} ${temp[1]} ${temp[2]} ${temp[3]}` : '';
    }

    const changeDate = (event, date) => {
        closeDatePicker();
        if(date){
            props.onChangeDate(date);
        }
    }

    return (
        <>
            <View style={basicStyles.dateInputView}>
                <TextInput style={ [basicStyles.basicInput, {width: "auto"}] } value={getDate()} editable={false} onPressOut={ () => {toggleDatePicker();} } />
                <TouchableOpacity 
                    style={ [basicStyles.button, basicStyles.buttonDate]}
                    onPress={ () => {openDatePicker();} }
                >
                    <Text 
                        style={[
                                basicStyles.button_text
                                , {color: "white"}
                            ]}
                    >
                        Set {props.title}
                    </Text>
                </TouchableOpacity>
            </View>
            {show && 
                <DateTimePicker 
                    value={dateTemp}
                    mode={mode}
                    display="default"
                    onChange={changeDate}
                />
            }
            
        </>
    );
}

export { DateInput };