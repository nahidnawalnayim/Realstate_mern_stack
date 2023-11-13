// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../app/TodoSlice';

// const Addtodo = () => {
//     const [value,setValue]=useState('');
//     const dispatch=useDispatch();
//     const submitHandler=(e)=>{
//         e.preventDefault();
//         if(value){
//             dispatch(addTodo({
//                 title: value
//             }))
//         }
//     }
//   return (
//     <div>
//         <h1>addTodo</h1>
//         <form onSubmit={submitHandler}>
//             <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
//             <button type="submit">add todo</button>
//         </form>
//     </div>
//   )
// }

// export default Addtodo