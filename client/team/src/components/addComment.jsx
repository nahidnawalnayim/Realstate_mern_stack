// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { addComment } from '../app/CommSlice.js';

// const AddComment = () => {
//     const [textcomment, setComment]=useState('');
//     const dispatch=useDispatch();
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         if(textcomment){
//             dispatch(addComment({text: textcomment}))
//         }
//     }
//   return (
//     <div>
//         <form onSubmit={handleSubmit} >
//             <input value={textcomment} onChange={(e)=> setComment(e.target.value)} />
//             <button type='submit'>submit</button>
//         </form>
//     </div>
//   )
// }

// export default AddComment