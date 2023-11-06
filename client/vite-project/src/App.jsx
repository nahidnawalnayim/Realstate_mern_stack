import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Signup from './components/signup';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {

  
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </>
  )
}

export default App
