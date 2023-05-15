import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_USERS } from "@/config";
import {IUser} from "@/app/types/IUser";

export const register = createApi({
    reducerPath: "register",
    tagTypes: ["register"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_USERS,
    }),

    endpoints: (builder) => ({
        register: builder.mutation<IUser, IUser>({
            query: (register) => ({
                url: "register",
                method: "POST",
                body: register,
            }),
            invalidatesTags: ["register"],
        }),
    }),
});

export const { useRegisterMutation } = register;
