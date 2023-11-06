import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Signup from './components/signup';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';


function App() {

  
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
