import React from 'react'
import { FaSearch, FaAmazon, FaAccusoft, Fa500Px, FaFemale } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetUserQuery } from '../app/loginSlice';

const Header = () => {
  const {userInfo} =useSelector((state)=> state.auth)
  console.log(userInfo);
  return (
    <> 
         <header className="bg-slate-200 shadow-md">
        <div className='flex justify-between items-center mx-auto sm:mx-16 p-3 h-16 '>
          <h1 className='flex flex-wrap font-bold font-serif text-sm sm:text-xl'>
            <Link to={'/'}>
          <span>Real</span>
          <span>TORR</span>
            </Link>
          </h1>
          <form className='bg-slate-100 p-3 rounded-lg flex items-center h-10'> 
            <input type='text' placeholder='Search here...' className='focus: outline-none bg-transparent w-24 sm:w-64' />
            <button>
            <FaSearch className='text-slate-600' />
         
            </button>
          </form>
          <ul className='flex gap-4 font-serif'>
            <Link to={'/'}>
            <li className='hidden sm:inline'>Home</li>
            </Link>
            <li className='hidden sm:inline'>About</li>
          
            <Link to={'/login'}>
            {
              userInfo ? (<Link to={'/profile'}>{<li>{userInfo.email}</li>}</Link>): (<li>Sign In</li>
              )
            }
              
            </Link>

          </ul>
        </div>

      </header>
    </>
  )
}

export default Header