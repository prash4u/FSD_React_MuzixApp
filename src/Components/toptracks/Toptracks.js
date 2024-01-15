import React, { useEffect, useState } from 'react';
import { Container,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TrackViewer from '../tracksviewer/TracksViewer';
import {getTopMusic} from '../../services/musicapi.service';

export default function Toptracks(props) {

    let exists="";
const [tracks, settracks] = useState([]);
//const [count, setcount] = useState(3);

const extractTracks = (data) =>
{
   
    let alltracks =  data.tracks;
    console.log("Inside Toptrack2: ");
    console.log(alltracks);
    settracks(alltracks);

}

useEffect(()=> {

    fetch(`http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=100`,{
       // method:"GET",
        headers:{
            "Content-type":"application/json"
        },
    })
        .then((res)=>res.json())
        .then((data)=>{
         //   console.log(data);
            extractTracks(data);
        });
    },[]);
  
    if( props.searchquery.query!== undefined)
    {
         exists = props.searchquery.query.name ? props.searchquery.query.name:"";
  
        console.log("Inside toptrack-query");
        console.log(exists);
    }
 
 
    return(
        <div>
            
        <div className='dashboard'>
            <div data-testid="container" className='container'>
                <div className='row mb-3'>
                    {
               
                      tracks.filter(track=>track.albumName.toLowerCase().includes(exists)).map((item) =>  
                     // tracks.map((item) =>
                      <TrackViewer 
                      key = {item.id}
                      name = {item.name}
                      artistName = {item.artistName}
                      albumName = {item.albumName}
                      previewURL = {item.previewURL}
                      bookmarkbtn={false}                   
                      />
                      )
                       

                     
                    }
                    
                </div>

            </div>

          
        </div>
  </div>
    );
}