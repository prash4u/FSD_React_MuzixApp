import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./header.css"



export default function Header(props){
  const [query, setsearchtext] = useState("");
 
 // const [username, setusername] = useState();

 //console.log(props);
 const username = localStorage.getItem("username");
 const [hidebtn,sethidebtn] = useState(false);
  

  function refreshPage() {
    window.location.reload(true);
        if(localStorage.getItem("username"))
    {
      sethidebtn = true;
    }
 //   setusername = localStorage.getItem("username");
  }


    return(

      <div className='header'>
        <div class="container-fluid sm-2 md-3 lg-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a data-testid="brandname" className="navbar-brand" href="#">Spotify Music</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
            <Link className='nav-link' aria-current="page" to="/" onClick={refreshPage}>Home</Link>

          </li>    

           <li className="nav-item active">
            {/* <a className="nav-link" href="/login" >Login <span className="sr-only">(current)</span></a> */}
            <Link className='nav-link' aria-current="page" to="/login"  hidden={hidebtn}>Login</Link>
          </li> 

           <li className="nav-item active">
            {/* <a className="nav-link" href="#">Register <span className="sr-only">(current)</span></a> */}
            <Link className='nav-link' aria-current="page" to="/register" hidden={hidebtn}>Register</Link>
          </li>
          <li className="nav-item active">            
            <Link className='nav-link' aria-current="page" to="/bookmark">MyPlaylist</Link>
          </li>        
        </ul>
        <ul className="navbar-nav ms-auto mb-3 mb-lg-0 ms-auto">
            
        <form className="form-inline my-1 my-lg-0 ml-1 mr-auto ms-auto">
        <input className="form-control me-2" type="search" placeholder="Search"
                     aria-label="Search" onChange={ props.handleChange} />
                     {/* (e)=> setsearchtext(e.target.value); */}
          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>
        <li className="nav-item active ml-2 me-auto mr-auto ms-auto">            
            <Link className='nav-link' aria-current="page" to="/logout" onClick={refreshPage}>Logout: {username}</Link>
          </li> 
        </ul>
        </div>
     
    </nav>
    </div>
    </div>
    )
}


