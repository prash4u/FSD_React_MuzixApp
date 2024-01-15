async function getTopMusic(count)
{
    let url=""
    if(count)
    {
        url = `http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=${count}`
    }
    else
    {
        url = "http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
    }
       
    let response = await fetch(url)
   
    return response;
    
}

async function searchMusic(query,type)
{
    let url = `http://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=${query}&type=${type}`
    //console.log(url);
    let response = await fetch(url);
   
    return response;

}
module.exports =
{
    getTopMusic,
    searchMusic
}