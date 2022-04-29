import { getCSRF } from "./api-common"
import { handleError } from "../utils/tools";

const urlSignUp = "https://bique.familyds.com:8001/api-choozen-auth/registration/";
const urlSignIn = "https://bique.familyds.com:8001/api-choozen-auth/login/";
const urlSignOut = "https://bique.familyds.com:8001/api-choozen-auth/logout/";

const signin = async (login, password) => {
    const csrf = await getCSRF();

    const form = new FormData();
    form.append('username', login);
    form.append('password', password);

    let response = await fetch(
        urlSignIn,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    );

    if(response.status === 400){
        let error = await response.json();
        throw error;
    }
    let json = await handleError(response).json();

    let key = json.key;

    return key;
} 

const signout = async (token) => {
    const csrf = await getCSRF();

    const form = new FormData();
    form.append("token", token);

    let response = await fetch(
        urlSignOut,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    )
    let json = await handleError(response).json();

    return json;
}

const signup = async (props) => {
    const csrf = await getCSRF();

    const login = props.login;
    const email = props.email;
    const firstname = props.firstname;
    const lastname = props.lastname;
    const password1 = props.password1;
    const password2 = props.password2;
    const birthdate = props.birthdate;

    const form = new FormData();
    form.append('username', login);
    form.append('email', email);
    form.append('first_name', firstname);
    form.append('last_name', lastname);
    form.append('password1', password1);
    form.append('password2', password2);
    form.append('birthdate', birthdate);

    let response = await fetch(
        urlSignUp,
        {
            method: 'POST',
            headers:{
                "X-CSRFToken": csrf
            },
            body: form
        }
    );

    if(response.status === 400){
        let error = await response.json();
        throw error;
    }
    let json = await handleError(response).json();

    let key = json.key;

    return key;
}

export {signin, signout, signup};