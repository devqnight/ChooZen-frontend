import { getCSRF } from "./Tokens";
import { handleError } from "../utils/tools";

const isAuthenticated = async (props) => {
    const csrf = await getCSRF();
    const form = new FormData();
    form.append('token',props.token);
    form.append('username',props.username);
    return await fetch(
        "https://bique.familyds.com:8001/api-choozen-auth/is_authenticated/",
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
        console.log(respone);
        return response;
    });
};

export {isAuthenticated};