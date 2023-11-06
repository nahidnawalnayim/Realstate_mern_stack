import React from 'react'

const Signup = () => {
  return (
    <section className="">
        <div className='mt-16'>
            <h1 className="text-center text-3xl font-bold ">Sign up</h1>
            <form className='max-w-md flex flex-col gap-4 mx-auto pt-8'>
                <input type="text" placeholder='Enter your name...' className=' focus:outline-none border rounded-md h-10 p-6 ' />
                <input type="text" placeholder='Enter your email...' className=' focus:outline-none border rounded-md h-10 p-6' />
                <input type="text" placeholder='Enter your password...' className=' focus:outline-none border rounded-md h-10 p-6' />
                <button type="submit" className='w-full text-white font-serif p-3 border bg-sky-600 rounded-md' >Submit</button>
                <button type='button' className='w-full text-white font-serif p-3 border bg-red-600 rounded-md' >Sign up with Google Account.</button >
            </form>
        </div>
    </section>
  )
}

export default Signup