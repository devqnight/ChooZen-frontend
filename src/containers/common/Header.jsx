import React from "react";
import { useSelector } from "react-redux";

const Header = (props) => {
    const theme = useSelector((state) => state.theme);

    return (
        <View>
            <Text>
                {props.title}
            </Text>
        </View>
    );

};

export default Header;