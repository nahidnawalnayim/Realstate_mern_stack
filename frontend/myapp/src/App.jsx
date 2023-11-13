import { useState } from 'react'
import Header from './components/Header';
import Signup from './components/signup';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
