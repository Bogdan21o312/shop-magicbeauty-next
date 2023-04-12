import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_USERS } from "@/config";
import { ILogin } from "@/app/types/IAuth";

export const login = createApi({
    reducerPath: "login",
    tagTypes: ["login"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_USERS,
    }),

    endpoints: (builder) => ({
        login: builder.mutation<ILogin, void>({
            query: (login) => ({
                url: "login",
                method: "POST",
                body: login,
            }),
            invalidatesTags: ["login"],
        }),
    }),
});

export const { useLoginMutation } = login;
