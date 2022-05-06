import React from "react";
import {View, StyleSheet, Modal, Text} from 'react-native';
import Header from "./Header.container";

const ModalWithHeader = ({movie, titleModal, visible, setVisible, content, onTouch}) => {

    const onRequestClose = () => {
        setVisible(false);
    }
    
    let title;
    if(titleModal)
        title = titleModal;
    else if(!movie){
        title = "Search for a Movie or Series"
    } else {
        title = "Details";
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <Header title={title} onTouch={onTouch ? onTouch : onRequestClose} type="Modal"/>
            {content}
        </Modal>
    );
}

export {ModalWithHeader};

const style = StyleSheet.create({

});