import { getCSRF } from "./api-common";
import { handleError } from "../utils/tools";
import { URLSERV } from "../../api";

const apiFetchGroups = URLSERV + "api-choozen/get_groups/";
const apiFetchGroup = URLSERV + "api-choozen/get_group/";
const apiSaveGroup = URLSERV + "api-choozen/save_group/";
const apiJoinGroup = URLSERV + "api-choozen/join_group/";
const apiDeleteGroup = URLSERV + "api-choozen/delete_group/";

const initialState = {
    active: null,
    groups: []
};

const changeGroup = async (id, group) => {
    const csrf = await getCSRF();

    const form = new FormData();
    form.append("user_id", id);
    form.append("group_id", group);

    let response = await fetch(
        apiFetchGroup,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    )

    if(response.status === 400){
        let error = await response.json();
        throw error;
    }
    let json = await handleError(response).json();
    
    return json;
}

const getGroups = async (id) => {

    const csrf = await getCSRF();

    let response = await fetch(
        apiFetchGroups + "?user_id=" + id,
        {
            method: 'GET',
            headers:{
                "X-CSRFToken": csrf
            },
        }
    )

    if(response.status === 400){
        let error = await response.json();
        throw error;
    }
    let json = await handleError(response).json();
    
    return json;
}

const createGroup = async (id, name) => {
    const csrf = await getCSRF();

    const form = new FormData();
    form.append("user_id", id);
    form.append("title", name);

    let response = await fetch(
        apiSaveGroup,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    )

    if(response.status === 400){
        let error = await response.json();
        throw error;
    }
    let json = await handleError(response).json();
    
    return json;
}

const joinGroup = async (user_id, id) => {
    const csrf = await getCSRF();

    const form = new FormData();
    form.append("user_id", user_id);
    form.append("group_id", id);

    let response = await fetch(
        apiJoinGroup,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    )
    
    if(response !== "User joined group")
        throw Error("failed to join group");

    return response;
}   

const deleteGroupAPI = async (user_id, group_id) => {
    const csrf = await getCSRF();

    const form = new FormData();
    form.append("user_id", user_id);
    form.append("group_id", group_id);

    let response = await fetch(
        apiDeleteGroup,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    )

    if(response.status !== 200)
        throw Error("failed to delete group");

    return response;
}

export { changeGroup, getGroups, createGroup, joinGroup, initialState, deleteGroupAPI };