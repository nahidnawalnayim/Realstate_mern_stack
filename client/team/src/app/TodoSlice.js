// import { createSlice } from '@reduxjs/toolkit'
// export const todoSlice=createSlice({
//     name: 'todo',
//     initialState: [
//         { id: 1, title: 'Debug your code'},
//         { id: 2, title: 'Find the bug'}
//     ],

//     reducers:{
//         addTodo:(state,action)=>{
//                 const todo={
//                     id: new Date(),
//                     title: action.payload.title
//                 }
//                 state.push(todo)
//             },
//         removeTodo:(state,action)=>{
//             return state.filter((todo)=>{
//                 todo.id!==action.payload.id
//             })
//         }
      
        
//     }
// })
// export const {addTodo,removeTodo} = todoSlice.actions;
// export default todoSlice.reducer;