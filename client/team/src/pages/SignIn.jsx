import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signinFail, signinStart, signinSuccess } from '../app/userSlice';

const SignIn = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const dispatch=useDispatch();
    const submitHandler=async(e)=>{
        e.preventDefault();
        try{
            dispatch(signinStart());
            const {data}= await axios.post('http://localhost:4001/login',{email,password});
           if(data.status === 400){
            dispatch(signinFail(data.message));
            return;
           }
           dispatch(signinSuccess(data));
           console.log("login successfull");
        }catch(e){
            dispatch(signinFail(e.message))
            console.log(e);
        }
       
    }
 

  return (
    <div>
        <div>
            <form onSubmit={submitHandler} style={{width: '300px', height: '500px' }}>
                <input type="text" placeholder='Enter your email.' onChange={(e)=>setEmail(e.target.value)} />
                <input type="text" placeholder='Enter your password.' onChange={(e)=>setPassword(e.target.value)} />
                <br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default SignIn