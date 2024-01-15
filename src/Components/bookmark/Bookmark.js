import { useEffect, useState } from "react";
import TrackViewer from '../tracksviewer/TracksViewer';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function BookMark() {

    let navigate=useNavigate()
    const [tracks, settracks] = useState([]);

    function refreshPage() {
        window.location.reload(true);
        
       }
    const extractTracks = (data) =>
    {
       
        let alltracks =  data.tracks;
        console.log("Inside Toptrack22: ");
        console.log(alltracks);
        settracks(alltracks);
    
    }
    const userId = localStorage.getItem("username");
     
    useEffect(() =>{
    
    fetch(`http://localhost:9011/api/v1/getbookmarks/${userId}`,{
        headers:{
            "Content-type":"application/json"
        },
    })
    .then(res=>res.json())
    .then((data) =>{
        console.log(data);
        extractTracks(data);          
    })
    .catch(e=>{
        alert("Error Occured. No bookmark found!")
        console.log("Testing catch1");
        navigate("/dashboard")
        refreshPage();
        console.log("Testing catch2");
    })
    ;
    },[]);

    if(!localStorage.getItem('token')){
        return <Navigate to="/login" replace/>
    }
    
    return(

        <div className='dashboard'>
            <div data-testid="container" className='container'>
                <div className='row mb-3'>
                    {
                      tracks.map((item) =>
                      <TrackViewer 
                      name = {item.songName}
                      artistName = {item.artistName}
                      albumName = {item.songName}
                      previewURL = {item.songUrl}
                      bookmarkbtn={true}
                      //tracks={tracks}
                      />
                      )
                       

                     
                    }
                    
                </div>

            </div>

          
        </div>

    );

}