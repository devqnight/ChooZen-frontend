import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from 'react-native';

import { TouchableIcon } from '../../components/icons/TouchableIcon.component';
import { Select } from "../../components/selects/Select.component";

import { updateGroup } from "../../actions/groups.actions"; 

import containerStyles from '../../themes/container_styles';

const Header = (props) => {
    const auth = useSelector((state) => state.auth);
    const theme = useSelector((state) => state.theme);

    if(props.title == "Profile")
        return (
            <View style={[containerStyles.headerStyle, {backgroundColor: theme.backgroundColor}]}>
                <Text style={[containerStyles.headerTitleStyle, {color: theme.bar.activeTint}]}>{props.title}</Text>
                <TouchableIcon iconName="logout-variant" onTouch={props.onTouch} height={27} color="#FFF"/>
            </View>
        );

    const groups = useSelector((state) => state.data.groups);
    let active = null;
    if(groups.groups)
        active = groups.groups.findIndex(x => x.name == groups.active);

    const dispatch = useDispatch();

    const update = (group, index) => {
        dispatch(updateGroup(auth.token, group));
    };

    let secondary;
    if(active !== null && active > -1)
        secondary = <Select options={groups.groups} active={active > 0 ? active : 0} updateSelection={(item, index) => update(item, index)}/>
    else
        secondary = <></>

    return (
        <View style={[containerStyles.headerStyle, {backgroundColor: theme.backgroundColor}]}>
            <Text style={[containerStyles.headerTitleStyle, {color: theme.bar.activeTint}]}>{props.title}</Text>
            {secondary}
        </View>
    );

};

export default Header;