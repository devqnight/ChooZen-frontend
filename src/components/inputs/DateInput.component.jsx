import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, TextInput, TouchableOpacity } from 'react-native';

import basicStyles from '../../themes/basic_components_styles';
import { Icon } from '../icons/Icon.component';
import { getAge } from '../../utils/tools';

const DateInput = (props) => {

    useEffect(() => {
        if(props.age){
            validateAge(props.value);
        }
    });

    const dateTemp = props.value;
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const checkAge = (date) => {
        if(!date)
            return false;
        return getAge(date.toLocaleDateString()) >= 13;
    }

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

    const validateAge = (date) => {
        if(props.age && !checkAge(date)){
            props.setErrMsg("You must be 13 or older");
            props.setValid(false);
        }else{
            props.setErrMsg(null);
            props.setValid(true);
        }
    }

    const changeDate = (event, date) => {
        closeDatePicker();
        if(date){
            props.onChangeDate(date);
            validateAge();
        }
    }

    return (
        <View>
            <View style={basicStyles.dateInputView}>
                <TextInput 
                    style={ [ {width: "auto"}] } 
                    value={getDate()}
                    onPressOut={ () => toggleDatePicker() } 
                />
                <TouchableOpacity 
                    style={ [basicStyles.button, basicStyles.buttonDate]}
                    onPress={ () => openDatePicker() }
                >
                    <Icon color="#FFF" height={25} iconName="calendar-month" />
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
            
        </View>
    );
}

export { DateInput };