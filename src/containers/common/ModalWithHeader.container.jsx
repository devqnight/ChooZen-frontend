import React from "react";
import {View, StyleSheet, Modal, Text} from 'react-native';
import Header from "./Header.container";

const ModalWithHeader = ({movie, visible, setVisible, content}) => {

    const onRequestClose = () => {
        setVisible(false);
    }
    
    let title;
    if(!movie){
        title = "Search for a Movie"
    } else {
        title = "Movie Details";
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={() => onRequestClose()}
        >
            <Header title={title} onTouch={() => onRequestClose()} type="Modal"/>
            {content}
        </Modal>
    );
}

export {ModalWithHeader};

const style = StyleSheet.create({

});