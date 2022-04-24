import React from "react";
import {View, StyleSheet, Modal, Text} from 'react-native';
import { useSelector } from "react-redux";
import Header from "../common/Header.container";
import { MovieDetail } from "./MovieDetail.container";
import { MovieSearch } from "./MovieSearch.container";

const MovieModal = ({theme, movie, visible, setVisible, search, closeAll}) => {

    const user = useSelector((state) => state.user);
    const group = useSelector((state) => state.data.groups.active);

    const onRequestClose = () => {
        setVisible(false);
    }
    
    let content;
    let title;
    if(!movie){
        title = "Search for a Movie"
        content = <MovieSearch 
            user={user}
            theme={theme}
            close={onRequestClose}
            group={group}
            closeAll={() => {onRequestClose(); closeAll()}}
        />;
    } else {
        title = "Movie Details"
        content = <MovieDetail 
            user={user}
            theme={theme}
            close={onRequestClose}
            group={group}
            movie={movie}
            search={search}
            closeAll={() => {onRequestClose(); closeAll()}}
        />;
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

export {MovieModal};

const style = StyleSheet.create({

});