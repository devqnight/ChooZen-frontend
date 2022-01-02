const doLogin = ({ log, pwd }) => {
    console.log(log);
    console.log(pwd);
    if (pwd === "password" && log === "admin" ){
        console.log("valid");
        return true;
    }
    return false;
}

module.exports = doLogin;