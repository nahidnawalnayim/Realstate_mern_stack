import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { fetchUser } from '../app/getUserSlice'
import { useGetUserQuery } from "../app/loginSlice";
import { addUser } from "../app/authSlice";

const Users = () => {
  //const {isLoading,users,error}= useSelector((state)=>state.allUser)
  const { data, error, isLoading } = useGetUserQuery("");
  if (error) return <h3>{error.message}</h3>;
  console.log(data);
  return (
    <div>
      {data?.map((user) => (
        <ul key={user._id}>
          <li>{user.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Users;
