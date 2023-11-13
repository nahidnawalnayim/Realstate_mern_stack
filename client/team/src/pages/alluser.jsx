import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../app/getUser';

const Alluser = () => {
    const { isLoading,users,error}=useSelector((state)=>state.allUser)
    const dispatch= useDispatch();
    useEffect(()=>{
      dispatch(fetchUser())
    },[])    
    return (
    <div>
        <div>
           {isLoading && <h3>...loading</h3>}
           {error && <h3>{error} </h3>}
            {users.map((user)=>{
             return <ol key={user.id}>              
              <li>{user.name}</li>
             </ol>
            }
            )}
        </div>
    </div>
  )
}

export default Alluser