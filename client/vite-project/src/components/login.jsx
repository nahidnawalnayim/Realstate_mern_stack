import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useLoginMutation, useRegisterMutation } from '../app/loginSlice';
import { Navigate, useNavigate } from 'react-router-dom';
//import { loginStart, loginSuccess } from '../app/useLogin';
import { setCredentials } from '../app/authCredential';
import { toast } from 'react-toastify';
const Login = () => {
  const [login]= useLoginMutation();
  const [email,setEmail]=useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch();
  const {userInfo}= useSelector((state)=>state.auth)
 console.log(userInfo);
  const navigate = useNavigate()
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await login({email,password}).unwrap();
      dispatch(setCredentials({...res}));
      navigate('/');
      toast.success(`Welcome. Successfully logged in`)
    }catch(e){
      toast.error('Invalid credential!!!');
    }
   
  }
  return (
    <section className="">
    <div className='mt-16'>
        <h1 className="text-center text-3xl font-bold ">Login</h1>
       
        <form className='max-w-md flex flex-col gap-4  m-10 sm:mx-auto pt-8' onSubmit={handleSubmit}>
            <input type="email" placeholder='Usermail...' className=' focus:outline-none border rounded-md h-10 p-6' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter your password...' className=' focus:outline-none border rounded-md h-10 p-6' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className='w-full text-white font-serif p-3 border bg-sky-600 rounded-md hover:opacity-80' >Submit</button>
            <button type='button' className='w-full text-white font-serif p-3 border bg-red-600 rounded-md hover:opacity-95' >Sign in with Google Account.</button >
        <p className=''>Don't have an account <Link to={'/signup'} className='text-blue-600'>create account.</Link> </p>
        </form>
    </div>
</section>
  )
}

export default Login