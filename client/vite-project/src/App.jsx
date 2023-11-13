import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Signup from './components/signup';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import Profile from './pages/profile';


function App() {

  
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </>
  )
}

export default App
