import { getCSRF } from "./api-common";
import { handleError } from "../utils/tools";

const apiFetchGroups = "https://bique.familyds.com:8001/api-choozen/get_groups/";
const apiFetchGroup = "https://bique.familyds.com:8001/api-choozen/get_group/";
const apiSaveGroup = "https://bique.familyds.com:8001/api-choozen/save_group/";

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

const joinGroup = async (token, name) => {

}   

export { changeGroup, getGroups, createGroup, joinGroup, initialState };