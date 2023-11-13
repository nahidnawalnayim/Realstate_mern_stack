import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading: false,
    currUser: null,
    error:null
}

const useLogin=createSlice({
    name: 'login',
    initialState,
    reducers:{
       loginStart: (state)=>{
            state.loading= true
        },
        loginSuccess: (state,action)=>{
            state.loading=false,
            state.currUser=action.payload,
            state.error= null
        },
        loginFail: (state,action)=>{
            state.loading= false,
            state.currUser=null,
            state.error= action.payload
        }
    }
})

export const {loginStart, loginSuccess, loginFail}= useLogin.actions
export default useLogin.reducer;