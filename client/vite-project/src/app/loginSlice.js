import { apiSlice } from "./apiSlice";
const BASEURL = "http://localhost:4001";
export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${BASEURL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${BASEURL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => ({ url: `${BASEURL}/users`}),
    }),
    logout:builder.mutation({
      query:(data)=>({
        url:`${BASEURL}/logout`,
        method: "POST",
        body: data
      })
    })
  }),
});
export const { useRegisterMutation, useLoginMutation, useGetUserQuery,useLogoutMutation } = userSlice;
