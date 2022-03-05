import React from 'react';
import { View } from 'react-native';

import InputSection from './InputSection';
import DateSection from './DateSection';

import containerStyles from '../theme/container_styles';

export const IdentitySection = (props) => {

    return (
        <View style={{ marginBottom: "10%" }}>
            <View
                style={ containerStyles.idenditySectionNames }
            >
                <View style={ containerStyles.idenditySectionNamesInput }>
                    <InputSection 
                        //style={ containerStyles.idenditySectionNameInput }
                        //width="45%"
                        text={ props.firstname }
                        inputTitle="Firstname"
                        placeHolder="firstname..."
                        onChangeInput={ props.onChangeFirstname }
                        password={ false }
                    />
                </View>
                <View style={ containerStyles.idenditySectionNamesInput }>
                    <InputSection 
                        //style={ containerStyles.idenditySectionNameInput }
                        //width="45%"
                        text={ props.lastname }
                        inputTitle="Lastname"
                        placeHolder="lastname..."
                        onChangeInput={ props.onChangeLastname }
                        password={ false }
                    />
                </View>

                

            </View>

            <DateSection
                inputTitle="Birthdate" 
                editable={props.editable}
                date={ props.birthdate } 
                onChangeDate={ props.onChangeDate } 
            />
        </View>
    );
}

