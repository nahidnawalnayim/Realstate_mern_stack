import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className="">
    <div className='mt-16'>
        <h1 className="text-center text-3xl font-bold ">Login</h1>
        <form className='max-w-md flex flex-col gap-4  m-10 sm:mx-auto pt-8'>
            <input type="text" placeholder='Usermail...' className=' focus:outline-none border rounded-md h-10 p-6' />
            <input type="text" placeholder='Enter your password...' className=' focus:outline-none border rounded-md h-10 p-6' />
            <button type="submit" className='w-full text-white font-serif p-3 border bg-sky-600 rounded-md' >Submit</button>
            <button type='button' className='w-full text-white font-serif p-3 border bg-red-600 rounded-md' >Sign in with Google Account.</button >
        <p className=''>Don't have an account <Link to={'/signup'} className='text-blue-600'>create account.</Link> </p>
        </form>
    </div>
</section>
  )
}

export default Login