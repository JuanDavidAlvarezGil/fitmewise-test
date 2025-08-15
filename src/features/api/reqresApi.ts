import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  id: number; email: string; first_name: string; last_name: string; avatar: string;
}

export const reqresApi = createApi({
  reducerPath: "reqresApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  tagTypes: ["Users", "User"],
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (body) => ({ url: "login", method: "POST", body }),
    }),
    register: builder.mutation<{ id: number; token: string }, { email: string; password: string }>({
      query: (body) => ({ url: "register", method: "POST", body }),
    }),
    getUsers: builder.query<{ data: User[]; page: number; total_pages: number }, number | void>({
      query: (page = 1) => `users?page=${page}`,
      providesTags: (result) => result?.data
        ? [
            ...result.data.map((u) => ({ type: "User" as const, id: u.id })),
            { type: "Users", id: "LIST" },
          ]
        : [{ type: "Users", id: "LIST" }],
    }),
    getUserById: builder.query<{ data: User }, number>({
      query: (id) => `users/${id}`,
      providesTags: (result, _, id) => [{ type: "User", id }],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUsersQuery, useGetUserByIdQuery } = reqresApi;