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

export {signin, signout};