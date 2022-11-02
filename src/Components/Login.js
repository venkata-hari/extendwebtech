import axios from 'axios';
import React, { useContext, useState } from 'react';
import {Store} from '../App'
import Profile from './Users'
function Login() {
    const{setToken}=useContext(Store)
    const[data,setData]=useState({
        username:'',
        password:'',
        value:false
    })
    const[value,setValue]=useState(false)
    const inputSubmit=(e)=>{
        e.preventDefault()
        const Name=e.target.getAttribute('name')
        const Value=e.target.value
        const newIndex={...data}
        newIndex[Name]=Value
        setData(newIndex)
    }

 const formSubmit=(e)=>{
    e.preventDefault()
    const req={
      username:data.username,
      password:data.password
    }
    axios.post('http://localhost:5000/api/login',req)
    .then((res)=>{
      setToken(res.data)
      console.log(res.data) 
    }).catch(err=>console.log(err))
    setValue(true)
    }
   const logout=()=>{
    setValue(false)
   }
    return (
      <div>
        {value?(
        <section>
          <Profile/>
          <button onClick={logout}>LogOut</button>
        </section>):(
        <form onSubmit={formSubmit}>
            <input type='text' name='username' onChange={inputSubmit} placeholder='Enter username'/><br/>
            <input type='text' name='password' onChange={inputSubmit} placeholder='Enter Password'/><br/>
            <button type='submit'>Login</button>        
        </form>)}

        </div>
    );
}

export default Login;