// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchUser= createAsyncThunk('getuser/getUser', async()=>{
// //    const [getUser]= useGetUserMutation();
// //    console.log(getUser);
//     // const res=await axios.get('http://localhost:4001/users');
//     // return res.data;
// })

// const getUser=createSlice({
//     name: 'getuser',
//     initialState:{
//         isLoading: false,
//         users: [],
//         error: null
//     },
//     extraReducers: (builder)=>{
//         builder.addCase(fetchUser.pending,(state)=>{
//             state.isLoading = true
//         })
//         builder.addCase(fetchUser.fulfilled,(state,action)=>{
//             state.isLoading = false,
//             state.users=action.payload,
//             state.error=null
//         })
//         builder.addCase(fetchUser.rejected,(state,action)=>{
//             state.isLoading = true,
//             state.users=[],
//             state.error= action.error.message
//         })
//     }

// })

// export default getUser.reducer;