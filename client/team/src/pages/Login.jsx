import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Login = () => {
  const {userInfo}= useSelector((state)=>state.cred)
  console.log(userInfo);
  
  return (
    <div>

    </div>
  )
}

export default Login