import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading: false,
    user: [],
    error: null
}

const authSlice=createSlice({
    name: 'userAuth',
    initialState,
    reducers: ({
        addUser: (state,action)=>{
            state.isLoading=false,
            state.user= action.payload,
            state.error= null
        }
    })
})

export const{addUser} = authSlice.actions;
export default authSlice.reducer;