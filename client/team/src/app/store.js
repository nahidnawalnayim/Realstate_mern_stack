import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import regReducer from "./regSlice";
// import todoReducer from './TodoSlice';
// import commReducer from './CommSlice';
import getReducer from'./getUser'
import credReducer from './authcred'
export default configureStore({
    reducer: {
        // todo: todoReducer,
        // comments: commReducer
        user: userReducer,
        registration: regReducer,
        allUser: getReducer,
        cred: credReducer
    }
})