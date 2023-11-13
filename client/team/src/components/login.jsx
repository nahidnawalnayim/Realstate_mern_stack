import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useLoginMutation, useRegisterMutation } from '../app/loginSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess } from '../app/useLogin';
import { setCredential } from '../app/authcred';
const Login = () => {
  const [email,setEmail]=useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch();
  const [login]= useLoginMutation();
  const state= useSelector((state)=>state.cred)
  console.log(state);
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/');
  //   }
  // }, [navigate, userInfo]);
  const handleSubmit=async(e)=>{
    try{
      dispatch(loginStart());
      e.preventDefault();
      const res=await login({email,password}).unwrap();
      dispatch(setCredential({...res}));
      navigate('/');

    }catch(e){
      console.log(e);
    }
   
  }
  return (
    <section className="">
    <div className='mt-16'>
        <h1 className="text-center text-3xl font-bold ">Login</h1>
       
        <form className='max-w-md flex flex-col gap-4  m-10 sm:mx-auto pt-8' onSubmit={handleSubmit}>
            <input type="text" placeholder='Usermail...' className=' focus:outline-none border rounded-md h-10 p-6' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter your password...' className=' focus:outline-none border rounded-md h-10 p-6' onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className='w-full text-white font-serif p-3 border bg-sky-600 rounded-md hover:opacity-80' >Submit</button>
            <button type='button' className='w-full text-white font-serif p-3 border bg-red-600 rounded-md hover:opacity-95' >Sign in with Google Account.</button >
        <p className=''>Don't have an account <Link to={'/signup'} className='text-blue-600'>create account.</Link> </p>
        </form>
    </div>
</section>
  )
}

export default Login