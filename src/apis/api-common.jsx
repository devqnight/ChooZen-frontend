const urlCSRF = "https://bique.familyds.com:8001/api-choozen/get_csrf/";
const urlAuthToken = "https://bique.familyds.com:8001/api-choozen-auth/is_authenticated/";

import { handleError } from "../utils/tools";

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
        return response;
    })
    .catch(e => {
        console.error(e);
        return null;
    });
}

const isAuthenticated = async (props) => {
    const token = props.token;
    const user = props.username;

    const form = new FormData();
    form.append('username',user);
    form.append('token', token);

    let response = await fetch(
      urlAuthToken, {
        method: 'POST',
        body: form
      }
    )
    
    let json = await handleError(response).json();

    return json;
}

export { getCSRF, isAuthenticated };