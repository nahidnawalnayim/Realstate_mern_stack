import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import { apiSlice } from "./apiSlice";
import loginReducer from "./useLogin"
import userReducer from './authCredential'


export default configureStore({
    reducer: {
        user: authReducer,
        auth: loginReducer,
        
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(apiSlice.middleware),
    //     // getDefaultMiddleware({
    //     //     serializableCheck: false,
    //     // }),
    devTools: true
})
