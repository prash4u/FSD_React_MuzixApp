import React, { useEffect, useState } from 'react';
import Toptracks from '../toptracks/Toptracks';
import ViewPlaylist from '../viewplaylist/ViewPlaylist';
import { Navigate } from "react-router-dom";

export default function Dashboad(props){

  if(!localStorage.getItem('token')){
    return <Navigate to="/login" replace/>
}
  console.log("logged in");
  console.log(props);
    return(
        <div>
          {/* <ViewPlaylist/> */}
           <Toptracks searchquery={props}/>
           
          
        </div>
    );
}