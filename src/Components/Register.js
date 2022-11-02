import React, { useState } from 'react';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const[data,setData]=useState({
    username:'',
    email:'',
    password:''
  })

  const inputSubmit=(e)=>{
    e.preventDefault()
    const Name=e.target.getAttribute('name')
    const Value=e.target.value
    const newIndex={...data}
    newIndex[Name]=Value
    setData(newIndex)
    console.log(newIndex)
  }
 
  const formSubmit=async(e)=>{
  e.preventDefault()
  const req={
    username:data.username,
    email:data.email,
    password:data.password
  }
  await axios.post('http://localhost:5000/api/register',req)
  .then(()=>console.log('sucess'))
  .catch(err=>console.log(err))
  
  }
 
  return (
    <form onSubmit={formSubmit}>
      <input type='text' name='username' placeholder='enter username' onChange={inputSubmit}/><br/>
      <input type='email' name='email' placeholder='enter email' onChange={inputSubmit}/><br/>
      <input type='text' name='password' placeholder='enter password' onChange={inputSubmit}/><br/>
    <button type="submit">Register</button>
     
    </form>
  );
}

export default Register;