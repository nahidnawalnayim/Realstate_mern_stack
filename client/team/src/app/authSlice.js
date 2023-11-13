import { apiSlice } from "./apiSlice";
const BASEURL= 'http://localhost:4001';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        register: builder.mutation({
            query: (data)=>({
                url: `${BASEURL}/register`,
                method: 'POST',
                body: data,  
            }),
        }),
        login: builder.mutation({
            query: (data)=>({
                url: `${BASEURL}/login`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useRegisterMutation, useLoginMutation}= userApiSlice;