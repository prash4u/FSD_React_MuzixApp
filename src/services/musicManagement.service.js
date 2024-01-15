async function addUserPlayList(apiRequest) {
    
    let url ="http://localhost:9011/api/v1/create"

    try
    {
       
        let response = await fetch(url,
            {
                method:'POST',
                body:JSON.stringify(apiRequest),
                headers:{
                    'Content-Type': 'application/json'
                }
    
            })
        return response;
    }
    catch
    {
        Promise.reject("Error Occured")
    }
  
}

async function getUserPlayLists(userId,token)
{
    let url =`http://localhost:9011/api/v1/${userId}`

    try
    {
        let response = await fetch(url,
            {
                method:'GET',
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
        return response;
    }
    catch
    {
        Promise.reject("Error Occured")
    }
}

async function getPlaylistByName(userId,playListName,token)
{
    let url =`http://localhost:9011/api/v1/${userId}/${playListName}`

    try
    {
        let response = await fetch(url);
        return response;
    }
    catch
    {
        Promise.reject("Error Occured")
    }
}

async function updateUserPlayList(userId,apiRequest)
{
    let url =`http://localhost:9011/api/v1/${userId}`

    try
    {
        let response = await fetch(url,
            {
                method:'PUT',
                body:JSON.stringify(apiRequest),
                headers:{
                    'Content-Type': 'application/json'
                }
            });
        return response;
    }
    catch
    {
        Promise.reject("Error Occured")
    }
}



async function bookmark(apiRequest,userId)
{
    let url =`http://localhost:9011/api/v1/addbookmark/${userId}`

    try
    {
        let response = await fetch(url,
            {
                method:'POST',
                body:JSON.stringify(apiRequest),
                headers:{
                    'Content-Type': 'application/json'
                }
            });
        return response;
    }
    catch
    {
        Promise.reject("Error Occured")
    }
}

async function getTrendingSong()
{
    let url ="http://localhost:9011/api/v1/trending/"

    try
    {
        let response = await fetch(url)
        return response;
    }
    catch
    {
        Promise.reject("Error Occured")
    }
}

async function getBookmarkedSongs(userId)
{
    let url =`http://localhost:9011/api/v1/getbookmarks/${userId}`

    try
    {
        let response = await fetch(url)
        return response;
    }
    catch
    {
        Promise.reject("Error Occured")
    }
}


module.exports=
{
    addUserPlayList,
    getUserPlayLists,
    getPlaylistByName,
    updateUserPlayList,
    bookmark,
    getTrendingSong,
    getBookmarkedSongs
}