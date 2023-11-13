// import { createSlice } from "@reduxjs/toolkit";

// export const CommSlice=createSlice({
//     name: 'comment module',
//     initialState: [
//         {id: 1, text: '1st comment.'},
//         {id: 2, text: '1st comment.'}
//     ],

//     reducers:{
//         addComment:(state,action)=>{
//             const comment={
//                 id: new Date(),
//                 text: action.payload.text
//             }
//             state.push(comment);
//         }
//     }
// })

// export const {addComment} =CommSlice.actions;
// export default CommSlice.reducer;