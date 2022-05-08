import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from 'react-native';

import { TouchableIcon } from '../../components/icons/TouchableIcon.component';
import { Select } from "../../components/selects/Select.component";

import { updateGroup } from "../../actions/groups.actions"; 

import containerStyles from '../../themes/container_styles';

const Header = (props) => {
    const user = useSelector((state) => state.user);
    const theme = useSelector((state) => state.theme);

    if(props.title == "Profile")
        return (
            <View style={[containerStyles.headerStyle, {backgroundColor: theme.backgroundColor}]}>
                <Text style={[containerStyles.headerLeftStyle, containerStyles.headerTitleStyle, {color: theme.bar.activeTint}]}>{props.title}</Text>
                <TouchableIcon iconName="logout-variant" onTouch={props.onTouch} height={30} color="#FFF"/>
            </View>
        );
    
    if(props.type == "Modal")
        return (
            <View style={[containerStyles.headerStyle, {backgroundColor: theme.backgroundColor, justifyContent: "flex-start"}]}>
                <TouchableIcon iconName="keyboard-backspace" onTouch={props.onTouch} height={27} color="#FFF"/>
                <Text style={[containerStyles.headerTitleStyle, {paddingLeft: 10,color: theme.bar.activeTint}]}>{props.title}</Text>
            </View>
        );

    const groups = useSelector((state) => state.data.groups);

    let active = null;
    if(groups.groups)
        active = groups.groups.findIndex(x => x.title == groups.active.title);

    const dispatch = useDispatch();

    const update = async (group, index) => {
        await dispatch(updateGroup(user.id, group.id));
    };

    let secondary;
    if(active !== null && active > -1)
        secondary = <Select style={containerStyles.headerSelectStyle} options={groups.groups} active={active > 0 ? active : 0} updateSelection={(item, index) => update(item, index)}/>
    else
        secondary = <></>

    let button;
    if((groups.groups && groups.groups.length) && props.title == "Groups")
        button = <TouchableIcon style={{alignSelf: "center", marginRight: 10}} height={27} onTouch={props.onTouch} iconName="plus" color="#FFF" />;
    else
        button = <></>;

    return (
        <View style={[containerStyles.headerStyle, {backgroundColor: theme.backgroundColor}]}>
            {
                <View style={containerStyles.headerLeftStyle}>
                    <Text style={[containerStyles.headerTitleStyle, {color: theme.bar.activeTint}]}>{props.title}</Text>
                    {button}
                </View>
            }
            {secondary}
        </View>
    );

};

export default Header;