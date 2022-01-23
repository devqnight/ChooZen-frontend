import { focusProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { getCSRF } from "./Tokens";

const urlSignUp = "https://bique.familyds.com:8001/api-choozen-auth/registration/";
const urlSignIn = "https://bique.familyds.com:8001/api-choozen-auth/login/";
const urlSignOut = "https://bique.familyds.com:8001/api-choozen-auth/logout/";

const handleError = (response) => {
    if(!response.ok) throw Error("Error on request : " + response.status + "\n" + response.statusText);
    return response;
}

const signIn = async (props) => {

    const username = props.username;
    const password = props.password;
    const csrf = await getCSRF();//props.csrf;

    const form = new FormData();

    form.append('username', username);
    form.append('password', password);

    //console.log("-----------> sign in props :");
    //console.log(" account username  : " + username);
    //console.log(" account password  : " + password);
    //console.log(" account csrf      : " + csrf );

    return await fetch(
        urlSignIn,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    )
    .then(response => {
        //if(response.status >= 400 && response.status < 600){
        //    //console.log(response.statusText);
        //    const text = response.text();
        //    //console.log(text);
        //    throw new Error("Bad response from server : " + response.status + " \n " + response.statusText);
        //}
        //if(!response.ok){
        //    throw new Error("Network response was not ok");
        //}

        return handleError(response).json();
    })
    .then(response => {
        return response.key;
    })
    .catch(e => {
        console.error(e);
    });
};

const signUp = async (props) => {

    const account = props;
    const csrf = await getCSRF();

    const form = new FormData();

    form.append('username', account.login);
    form.append('email', account.email);
    form.append('password1', account.password1);
    form.append('password2', account.password2);
    form.append('birthdate', account.birthdate);

    //console.log(" account csrf : " + csrf );

    return await fetch(
        urlSignUp,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    )
    .then(response => {
        //if(response.status >= 400 && response.status < 600){
        //    const text = response.text();
        //    //console.log(text);
        //    throw new Error("Bad response from server : " + response.status + " \n " + response.statusText);
        //}
        //if(!response.ok){
        //    throw new Error("Network response was not ok");
        //}
        return handleError(response).json();
    })
    .then(response => {
        return response.key;
    })
    .catch(e => {
        console.error(e);
    });
}

const signOut = async (props) => {
    const token = props.token;
    const csrf = await getCSRF();

    const form = new FormData();

    //console.log("---> token : " + token);
    //console.log("---> csrf  : " + csrf);

    form.append("token", token);

    return await fetch(
        urlSignOut,
        {
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
    .then(response => {
        //console.log("log out response : " + response.detail);
        return response;
    })
    .catch(err => {
        console.error(err);
    });

    //return true;
}


export { signIn, signUp, signOut };