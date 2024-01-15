import { useEffect } from "react";
import {Redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";


export default function Logout() {
    let navigate=useNavigate()
    useEffect(()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        refreshPage();
    })

    function refreshPage() {
        window.location.reload(true);
        
       }

    return(
        <div>
           <Navigate to="/login" replace/>
            {/* navigate("/login"); */}
        </div>
    );
}