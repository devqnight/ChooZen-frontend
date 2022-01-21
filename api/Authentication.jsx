const urlSignUp = "https://bique.familyds.com:8001/api-choozen-auth/registration/";
const urlSignIn = "https://bique.familyds.com:8001/api-choozen-auth/login/";
const urlCSRF = "https://bique.familyds.com:8001/api-choozen-auth/";

const getCSRF = async () => {
    return await fetch(
        urlCSRF, {
            method: 'GET'
        }
    )
    .then(response => {
        return response.csrftoken;
    });
}

const signIn = async (props) => {

    //const csrftoken = await getCSRF();

    const username = props.username;
    const password = props.password;

    const form = new FormData();

    form.append('username', username);
    form.append('password', password);

    return await fetch(
        urlSignIn,
        {
            method: 'POST',
            body: form
        }
    )
    .then(response => {
        if(response.status >= 400 && response.status < 600){
            throw new Error("Bad response from server : " + response.status);
        }
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
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

    //console.log("\n" + "fetching server ...");
    //console.log("awaiting response...");

    const form = new FormData();

    form.append('username', account.login);
    form.append('email', account.email);
    form.append('password1', account.password1);
    form.append('password2', account.password2);
    form.append('birthdate', account.birthdate);


    return await fetch(
        urlSignUp,
        {
            method: 'POST',
            body: form
        }
    )
    .then(response => {
        if(response.status >= 400 && response.status < 600){
            throw new Error("Bad response from server : " + response.status + "\n " + response.text());
        }
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(response => {
        return response.key;
    })
    .catch(e => {
        console.error(e);
    });
}

const checkToken = async (props) => {
    const token = props.token;
    if(token != undefined) return props;
    return null;
}

export { signIn, checkToken, signUp };