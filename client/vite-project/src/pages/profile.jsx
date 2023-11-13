import React from 'react'
import { useLogoutMutation } from '../app/loginSlice'
import { useDispatch } from 'react-redux';
import { logoutuser } from '../app/authCredential';
const Profile = () => {
    const dispatch=useDispatch();
    const [logout]=useLogoutMutation();
    const logoutHandler=async(e)=>{
        try{
            await logout().unwrap();
            dispatch(logoutuser());
        }catch(e){
            console.log(e);
        }
    }
  return (
    <div>
        <div>
            <button type="submit" onClick={logoutHandler} className='bg-red-600 w-60 p-3 rounded-md text-white' >
                logout
            </button>
        </div>
    </div>
  )
}

export default Profile