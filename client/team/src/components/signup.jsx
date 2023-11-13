import React, { useState } from 'react'
import { useRegisterMutation } from '../app/loginSlice'
import { useDispatch } from 'react-redux';
import { addUser } from '../app/authSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [register] = useRegisterMutation();
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(addUser({ ...res }));
      setRedirect(true);
      if (res.message === "new user created.") {
        navigate('/');
      }
      console.log(res.message);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <section className="">
      <div className='mt-16'>
        <h1 className="text-center text-3xl font-bold ">Sign up</h1>
        <form className='max-w-md flex flex-col gap-4 m-10 sm:mx-auto pt-8' onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter your name...' className=' focus:outline-none border rounded-md h-10 p-6 ' onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder='Enter your email...' className=' focus:outline-none border rounded-md h-10 p-6' onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Enter your password...' className=' focus:outline-none border rounded-md h-10 p-6' onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className='w-full text-white font-serif p-3 border bg-sky-600 rounded-md' >Submit</button>
          <button type='button' className='w-full text-white font-serif p-3 border bg-red-600 rounded-md' >Sign up with Google Account.</button >
        </form>
      </div>
    </section>
  )
}

export default Signup