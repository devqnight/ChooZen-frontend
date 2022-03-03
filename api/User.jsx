
const isAuthenticated = async (props) => {
    try {
        const csrf = await getCSRF();
        const form = new FormData();
        form.append('token',props.token);
        form.append('username',props.username);
        await fetch(
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
        }).then(result => {
            if(result.authenticated){
                return result;
            } else {
                throw new Error("not authenticated");
            }
        })
    } catch(err){
        return {
            id: null,
            first_name: null,
            last_name: null,
            email: null,
            birthdate: null,
            date_joined: null,
            is_superuser: false,
            is_staff: false,
            is_active:false
        };
    };
};

export {isAuthenticated};