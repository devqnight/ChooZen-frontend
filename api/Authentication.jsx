const signIn = async (props) => {

    const email = props.email;
    const password = props.password;

    //const response = await fetch(
    //    "https://bique.familyds.com:8001/api-choozen-auth/login/",
    //    {
    //        method: 'POST',
    //        body: JSON.stringify({
    //            "email": email,
    //            "password": password
    //        })
    //    }
    //);
    //

    if( email == "admin" && password == "password"){
        return true;
    }
    return false;

};

const signUp = async (props) => {

}

const checkToken = async (props) => {
    console.log("checking token");
    if( props.token == "admin"){
        console.log("token is valid");
        return props;
    } else {
        console.log("wrong token");
        return null;
    }
    
    //return new Promise((resolve, reject) => {
    //    console.log("checking token");
    //        if( props.token == "admin"){
    //            console.log("token is valid");
    //            resolve = props;
    //            return resolve;
    //        } else {
    //            console.log("wrong token");
    //            return reject;
    //        }
    //});
}

export { signIn, checkToken };