import React, { useContext, useState } from 'react';
import { Text, View } from "react-native";
import { AuthContext } from '../../api/AuthContext';
import { signOut } from '../../api/Authentication';

import { Header } from '../../containers/common/Header';
import InputSection from '../../containers/common/InputSection';

import screenStyles from '../../theme/screens_styles';

export default function Profile() {
    const { auth, setAuth } = useContext(AuthContext);

    const [login, setLogin] = useState(auth.user);

    const date = new Date(auth.date_joined);
    const birthday = new Date(auth.birthdate);

    const logout = () => {
        //console.log("\n\nsigning out \n");
        signOut({ token : auth.token })
        .then(response => {
            //console.log("sign out : " + response.detail);
            setAuth({
                token: null,
                user: null,
                isLoading: false
            });
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <View style={ screenStyles.home }>
            <Header title="profile" onTouch={() => {logout()}} backgroundColor="orchid"/>

            <View style={{padding: "5%"}}>
                <View style={{display: "flex", justifyContent: "space-between", flexDirection: "row", marginBottom: "5%"}}>
                    <View style={{width: "47%"}}>
                        <InputSection text={login} inputTitle="Login" editable={false} placeHolder="" onChangeInput={ () => {} } password={ false } error={ false } errorText={ "" }/>
                    </View>
                    <View style={{width: "47%"}}>
                        <InputSection text={date.toLocaleDateString("FR")} editable={false} inputTitle="Joined" placeHolder="" onChangeInput={ () => {} } password={ false } error={ false } errorText={ "" }/>
                    </View>
                </View>
                <View style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
                    <View style={{width: "47%"}}>
                        <InputSection text={auth.first_name} inputTitle="First name" editable={false} placeHolder="" onChangeInput={ () => {} } password={ false } error={ false } errorText={ "" }/>
                    </View>
                    <View style={{width: "47%"}}>
                        <InputSection text={auth.last_name} inputTitle="Last name" editable={false} placeHolder="" onChangeInput={ () => {} } password={ false } error={ false } errorText={ "" }/>
                    </View>
                </View>
                <InputSection text={birthday.toLocaleDateString("FR").trim()} inputTitle="Birthday" editable={false} placeHolder="" onChangeInput={ () => {} } password={ false } error={ false } errorText={ "" }/>
            </View>
        </View>
    );
}