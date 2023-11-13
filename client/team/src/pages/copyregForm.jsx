import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { regFail, regSuccess } from '../app/regSlice';
import { useRegisterMutation } from '../app/authSlice';
import { useLoginMutation } from '../app/authSlice';
const CopyregForm = () => {
    const dispatch= useDispatch();
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [register]= useRegisterMutation();
    const state= useSelector((state)=>state.cred)
    console.log(state);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
           const res= await register({name,email,password}).unwrap(); 
            dispatch(regSuccess(...res));
        }catch(e){
            dispatch(regFail(e.message))
        }
    }

    return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=> setName(e.target.value)} />
                <input type="text" onChange={(e)=> setEmail(e.target.value)} />
                <input type="text" onChange={(e)=> setPassword(e.target.value)} />
                <button type='submit' >Submit</button>
            </form>
        </div>

    </div>
  )
}

export default CopyregForm