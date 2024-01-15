import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../services/usermanagement.service';

export default function Login() {
    let navigate=useNavigate()
   const [customerName, setcustomerName] = useState("")
   const [password, setpassword] = useState("")

   function refreshPage() {
    window.location.reload(true);
    
   }
   const loginHandller=()=>{    
    fetch(`http://localhost:9010/api/v1/user/login`, {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({customerName,password})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        localStorage.setItem("username",customerName);
        localStorage.setItem("token",data.token);
        navigate("/dashboard");
        refreshPage();
    })
    .catch(e=>{
        alert("Invalid login, Please Try again!")
        console.log("Testing catch login");
   
         
     
    })
    
   }

  return (
    <div>
        <div className='row'>
            <div className='col-md-4 offset-md-4'>
                <br/><br/>
                <h2 className='text-center mt-5' style={{color:'white'}}> Login Here </h2>
                <div className='mb-2'>
                    <input className='form-control' type="text" placeholder="User Name" onChange={(e)=>setcustomerName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <input className='form-control' type="Password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <button className='btn btn-success' onClick={loginHandller} > Login </button>
                </div>


            </div>
        </div>
    </div>
  )
}
