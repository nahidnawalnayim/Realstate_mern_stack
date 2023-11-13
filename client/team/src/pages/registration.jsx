import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { regFail, regSuccess } from '../app/regSlice';

const Registration = () => {
    const dispatch= useDispatch();
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const {data}= await axios.post("http://localhost:4001/register", {name, email, password})
            if(data.status === 400){
                dispatch(regFail(data.message))
            }
            dispatch(regSuccess(data));
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

export default Registration