import { getCSRF } from "./api-common";

const apiFetchGroups = "https://bique.familyds.com:8001/api-choozen/get_groups/";

const initialState = {
    active: null,
    groups: []
};

const changeGroup = async (token, group) => {
    const name = group;

    const newgroup = initialState.groups.find(x => x.name = name).name;

    return {name: newgroup, movies: []};
}

const getGroups = async (id) => {

    const csrf = await getCSRF();

    const form = new FormData();
    form.append('user_id', id);

    let response = await fetch(
        apiFetchGroups,
        {
            method: 'GET',
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

const createGroup = async (token, name) => {
    const newgroup = {
        name: name,
        creator: 'user'
    }

    initialState.groups.push(newgroup);
    const temp = {...initialState};
    temp.active = name;

    return temp;
}

const joinGroup = async (token, name) => {

}   

export { changeGroup, getGroups, createGroup, joinGroup, initialState };