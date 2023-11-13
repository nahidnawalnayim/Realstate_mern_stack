import { createSlice } from "@reduxjs/toolkit";

const initialState={
    regUser: null,
    error: null,
   
}
const regSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        regSuccess: (state, action)=>{
            state.regUser= action.payload,
            state.error= null
        },
        regFail: (state,action)=>{
            state.error= action.payload
        }
    }    
})

export const {regSuccess,regFail}= regSlice.actions;
export default regSlice.reducer;