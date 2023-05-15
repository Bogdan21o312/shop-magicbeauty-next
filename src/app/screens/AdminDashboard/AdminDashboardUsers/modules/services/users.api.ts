import { BASE_URL_USERS } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "@/app/types/IUser";

export const usersApi = createApi({
    reducerPath: "users",
    tagTypes: ['users'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_USERS,
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<{data: IUser[] }, { _limit?: number, _page?: number, _search?: string }>({
            query: ({ _limit = 10, _page = 1, _search }) => ({
                url: '',
                params: {
                    _limit,
                    _page,
                    _search
                },
            }),
            providesTags: result => ['users']
        }),
        createUsers: builder.mutation<IUser, IUser>({
            query: (user) => ({
                url: '',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['users']
        }),
        updatedUsers: builder.mutation<IUser, IUser>({
            query: (user) => ({
                url: `${user._id}`,
                method: 'PUT',
                body: user,
            }),
            invalidatesTags: ['users']
        }),
        deleteUsers: builder.mutation<IUser, IUser>({
            query: (user) => ({
                url: `${user._id}`,
                method: 'DELETE',
                body: user,
            }),
            invalidatesTags: ['users']
        }),
    }),
});

export const { useGetUsersQuery, useCreateUsersMutation, useDeleteUsersMutation, useUpdatedUsersMutation } = usersApi;
