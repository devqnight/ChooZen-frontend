//import { useState } from 'react';

const urlCSRF = "https://bique.familyds.com:8001/api-choozen/get_csrf/";
const urlAuthToken = "https://bique.familyds.com:8001/api-choozen-auth/is_authenticated/";

import { handleError } from "../utils/tools";

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
    const user = props.user;

    const form = new FormData();

    form.append('username',user);
    form.append('token', token);

    const csrf = await getCSRF();
    return await fetch(
      urlAuthToken, {
        method: 'POST',
        headers:{
          "X-CSRFToken": csrf
        },
        body: form
      }
    )
    .then(response => {
      return handleError(response).json();
    })
    .catch(e=>{
      return null;
    });
}

export { getCSRF, checkToken };