
import React, { useEffect, useState } from 'react'
import './TracksViewerCard.css'
import Tracks from 'react-bootstrap/Card'
import {Container,Button,CardColumns} from 'react-bootstrap';
import { Navigate } from "react-router-dom";

export default function TracksViewer(props){

  const [audio,setaudio] = useState();
const name= props.songName;
const artistName=props.artistName;
const songName=props.name;
const songUrl=props.previewURL;
const imageUrl=props.imageUrl;


   const playMusic =()=>{
    let audio = new Audio(props.previewURL);
    audio.play();
    
   }

   const pauseMusic =()=>{
    let audio = new Audio(props.previewURL);
    audio.pause();
    
   }


   const addToBookMark =() =>{
    const userId = localStorage.getItem("username");
    console.log("username:" + userId);
   // console.log(props.songName, );
    console.log(artistName + songName + songUrl + imageUrl)
    fetch(`http://localhost:9011/api/v1/addbookmark/${userId}`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({artistName,songName,songUrl,imageUrl})
   }).then(res =>{
    console.log(res);
    if(res.ok && res.status === 201){
        alert("Song successfully added to playlist")
    }
   })
}
   
if(!localStorage.getItem('token')){
    return <Navigate to="/login" replace/>
}
  // console.log(props.name);
  
    return(

        <div className='card-dis col-3 mt-5 ml-1 mr-5'>  
        <div className='card mt-0 mb-0 mr-0 ml-0 h-80'>
            {/* <img src={props.url} className="card-img-top" alt="source-image"/> */}
            {/* <div className="card text-white bg-success mb-3" style={{width: '18rem'}}> */}
            <div data-testid= "card-body" className="card-body text-dark bg-light mb-0">
               <h5 className="card-title" data-testid='title'>Song- {props.name}</h5>
                {/* <h5 className="card-title" data-testid='title'>{props.name}</h5> */}
                <h6 className="card-text" data-testid='author'>Artist - {props.artistName}</h6>
                <h6 className="card-text" data-testid='author'>Album - {props.albumName}</h6>
                <div className='read-later'>
                <button data-testid= "read-later" className='btn btn-primary btn-sm active mt-2 mr-5 ml-5' style={{margin:'5px'}} role="button" aria-pressed="true" 
                onClick={playMusic} >Play</button>
                {/* <button data-testid= "read-later" className='btn btn-primary btn-sm active mt-2 mr-5 ml-5' style={{margin:'5px'}} role="button" aria-pressed="true" 
                onClick={pauseMusic} >Pause</button> */}
                <button data-testid= "read-later" className='btn btn-primary btn-sm active mt-2 ml-5 padding:20px' style={{margin:'5px'}} role="button" aria-pressed="true" disabled={props.bookmarkbtn} hidden={props.bookmarkbtn}
                onClick={addToBookMark} >Bookmark to playlist</button>
                </div>
            </div>
            </div>
        </div>
    // </div> 
  
   
    )
}