import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../app/authSlice';
import { useRegisterMutation } from '../app/loginSlice';

const Register = () => {
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const dispatch= useDispatch();
    const [register]=useRegisterMutation();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          const res = await register({name,email,password}).unwrap();
            dispatch(addUser({...res}));
            console.log(res);
        }catch(e){
            console.log(e);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
            <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type='text' value={password} onChange={(e)=> setPassword(e.target.value)} />
            <br />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Register