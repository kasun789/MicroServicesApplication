import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link,useNavigate,useParams } from 'react-router-dom';
import '../assets/css/home.css'



export default function Home() {

    let navigate = useNavigate();
    const loadLogin=()=>{
        navigate(`/login`);

   }
   const loadSignUp=()=>{
    navigate(`/signUp`);

}


  return (


   <div>
   <div className='homeContainer'>
            <h1>Sri Tel (PVT)LTD</h1>
            
            <Button onClick={loadSignUp} className='signUp'>Sign Up</Button>
            <Button onClick={loadLogin} className='login'>Login</Button>
   </div>
   
   
   
   
   </div>
   


  )}