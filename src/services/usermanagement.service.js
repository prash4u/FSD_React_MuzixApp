async function userLogin(creds)
{
    console.log(creds);
    let url = "http://localhost:9010/api/v1/user/login";
    try
    {
        let response = await fetch(url,
        {
            method:'POST',
            body:JSON.stringify(creds),
            headers:{
                'Content-Type': 'application/json'
            }
        })
         console.log(response.json());
        return response;
    }
    catch
    {
        return Promise.reject("Server Error")
    }
}

async function registerUser(user)
{
    let url = "http://localhost:9010/api/v1/user/register"
    try
    {
        let response = await fetch(url,
        {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type': 'application/json'
            }
        })
         
        return response;
    }
    catch
    {
        return Promise.reject("Server Error")
    }
}

module.exports ={
    userLogin,
    registerUser
   
}