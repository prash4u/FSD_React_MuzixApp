//import { render } from '@testing-library/react';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary';

export default function Register() {
    let navigate=useNavigate()
    const [customerName, setcustomerName] = useState("")
    const [password, setpassword] = useState("")

    const registerUser=()=>{
        //try{
        fetch(`http://localhost:9010/api/v1/user/register`, {
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
            alert("User Successfully registered!")
            navigate("/login");
        }) 
        .catch(e=>{
            alert("Error Occured. Please check if user already exist or Try again!")
            console.log("Testing catch");
           // render(){
                return <ErrorHandler error={e} />
             
         
        })
    
    }


    function ErrorHandler({error}) {
        return (
          <div role="alert">
            <p>An error occurred:</p>
            <pre>{error.message}</pre>
          </div>
        )
      }

  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
    <div>
        <div className='row'>
            <div className='col-md-4 offset-md-4'>
                <h2 className='text-center mt-5' style={{color:'white'}}> Register </h2>
                <div className='mb-2'>
                    <input className='form-control' type="text" placeholder="User Name" onChange={(e)=>setcustomerName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <input className='form-control' type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <button className='btn btn-success' onClick={registerUser}> Register </button>
                </div>


            </div>
        </div>
    </div>
    </ErrorBoundary>
  )
}
