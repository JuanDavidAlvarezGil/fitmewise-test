import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const reqresApi = createApi({
  reducerPath: "reqresApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/",
    headers: { "x-api-key": "reqres-free-v1" },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: (body) => ({ url: "login", method: "POST", body }),
    }),
    register: builder.mutation<
      { id: number; token: string },
      { email: string; password: string }
    >({
      query: (body) => ({ url: "register", method: "POST", body }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = reqresApi;
