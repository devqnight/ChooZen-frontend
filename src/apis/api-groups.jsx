const initialState = {
    active: null,
    groups: []
};

const changeGroup = async (token, group) => {
    const name = group;

    const newgroup = initialState.groups.find(x => x.name = name).name;

    return {name: newgroup, movies: []};
}

const getGroups = async (token) => {
    return initialState;
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