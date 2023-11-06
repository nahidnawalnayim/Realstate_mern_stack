import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from './app/authSlice'
import { apiSlice } from "./app/apiSlice";
//import allUserReducer from './app/getUserSlice'
export default configureStore({
    reducer: ({
        user: authReducer,
        //allUser: allUserReducer
    }),
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})
