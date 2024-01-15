import React,{useState} from "react";
import Login from "./Components/login/Login";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Dashboard from "./Components/dashboard/Dashboard";
import Tracklist from './Components/tracklist/Tracklist';
import Playlist from './Components/playlist/Playlist';
import Register from './Components/register/Register';
import Bookmark from './Components/bookmark/Bookmark';
import Logout from './Components/logout/Logout';
import {BrowserRouter as Router,  Route,Routes,Link,Navigate} from "react-router-dom";

function App() {
  const [inputs, setInputs] = useState({});

  const onHandleChange =(event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values =>({...values, ["name"]:value})) //lifting state up

  
    // console.log(value);
  
  }

  console.log(inputs);
  //console.log(inputs.query);
  return(
    <div style={{backgroundImage:`url(music_crowd.JPG")`}}>
      <Router>
        <Header query={inputs} handleChange ={onHandleChange}/>
        <Routes>
            <Route path="/" element = {<Dashboard query={inputs}/>}/> 
            <Route path="/login" element = {<Login/>}/> 
            <Route exact path="/dashboard" element = {<Dashboard query={inputs}/>} />
            <Route exact path="/bookmark" element = {<Bookmark/>}/>
            <Route exact path="/register" element = {<Register/>}/>
            <Route exact path="/dashboard" element = {<Dashboard/>}/>
            <Route exact path="/viewtrack/:id" element = {<Tracklist/>}/>
            <Route exact path="/create/" element = {<Playlist/>}/>           
            <Route exact path="/logout" element = {<Logout/>}/>
            
        </Routes>
        <Footer/>
      </Router>
    </div>
);
}
export default App;
