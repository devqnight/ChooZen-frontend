//import { useState } from 'react';

const urlCSRF = "https://bique.familyds.com:8001/api-choozen/get_csrf/";
const urlAuthToken = "https://bique.familyds.com:8001/api-choozen-auth/is_authenticated/";

//const [csrftoken, setToken] = useState("");

const getCSRF = async () => {
    return await fetch(
        urlCSRF, {
            method: 'GET'
        }
    )
    .then(response => {
        if(response.status >= 400 && response.status < 600){
            throw new Error("Bad response from server : " + response.status);
        }
        return response.text();
    })
    .then(response => {
        //console.log("csrf : " + response);
        return response;
    })
    .catch(e => {
        console.error(e);
    });
}

const checkToken = async (props) => {
    const token = props.token;
    
    //TO-DO: check auth token validity
    //const valid = await fetch()
    //.then()
    //.then()
    //.catch();

    if(token !== null) return {token: token};
    return null;
}

export { getCSRF, checkToken };