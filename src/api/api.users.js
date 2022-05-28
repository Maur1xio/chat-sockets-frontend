const URL_BASE_USERS = "http://localhost:3001/api/users";


export const apiUsers = {};


apiUsers.addUser = async function(data){
    const res = await fetch(`${URL_BASE_USERS}/register` , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(data)
    });

    return await res.json();

}

apiUsers.loginUser = async function(data){
    const res = await fetch(`${URL_BASE_USERS}/login` , {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await res.json();
}

apiUsers.findUsers = async function(word, id){
    const res = await fetch(`http://localhost:3001/api/users/find-user?word=${word}&id=${id}`);


    return await res.json();
}