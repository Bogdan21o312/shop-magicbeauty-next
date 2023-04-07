import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL_GEL_POLISHES_KODI} from "@/config";
import {IProduct} from "@/app/types/IProduct";

export const gelPolishesKodiApi = createApi({
    reducerPath: "gelPolishesKodiApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_GEL_POLISHES_KODI,
    }),
    endpoints: (builder) => ({
        getGelPolishesKodi: builder.query<IProduct[], void>({
            query: (post) => ({
                url: 'gel-polishes-kodi/',
            }),
        }),
        getGelPolishesKodiByID: builder.query<IProduct, number>({
            query: (_id) => `gel-polishes-kodi/${_id}`,
        }),
        createGelPolishesKodi: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: 'gel-polishes-kodi/',
                method: 'POST',
                body: product
            }),
        }),
        updateGelPolishesKodi: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `gel-polishes-kodi/${product._id}`,
                method: 'PUT',
                body: product
            }),
        }),
        deleteGelPolishesKodi: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `gel-polishes-kodi/${product._id}`,
                method: 'DELETE',
                body: product
            }),
        }),
    }),
});

export const {useGetGelPolishesKodiQuery, useCreateGelPolishesKodiMutation, useDeleteGelPolishesKodiMutation, useUpdateGelPolishesKodiMutation} = gelPolishesKodiApi
