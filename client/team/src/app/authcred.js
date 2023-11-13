import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

}

const authentication= createSlice({
    name: 'cred',
    initialState,
    reducers:{
        setCredential: (state,action) => {
            state.userInfo= action.payload,
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        }
    }
})

export const {setCredential} =authentication.actions
export default authentication.reducer;