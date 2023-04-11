import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL_GEL_POLISHES_KODI} from "@/config";
import {IProduct} from "@/app/types/IProduct";

export const gelPolishesKodiApi = createApi({
    reducerPath: "gelPolishesKodiApi",
    tagTypes: ['gelPolishesKodi'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_GEL_POLISHES_KODI,
    }),
    endpoints: (builder) => ({
        getGelPolishesKodi: builder.query<IProduct[], { _limit?: number, _page?: number, _search?: string }>({
            query: ({ _limit = 10, _page = 1, _search }) => ({
                url: 'gel-polishes-kodi/',
                params: {
                    _limit,
                    _page,
                    _search
                },
            }),
            providesTags: result => ['gelPolishesKodi']
        }),
        createGelPolishesKodi: builder.mutation<IProduct, IProduct>({
            query: (gelPolishesKodi) => ({
                url: 'gel-polishes-kodi/',
                method: 'POST',
                body: gelPolishesKodi,
            }),
            invalidatesTags: ['gelPolishesKodi']
        }),
        updatedGelPolishesKodi: builder.mutation<IProduct, IProduct>({
            query: (gelPolishesKodi) => ({
                url: `gel-polishes-kodi/${gelPolishesKodi._id}`,
                method: 'PUT',
                body: gelPolishesKodi,
            }),
            invalidatesTags: ['gelPolishesKodi']
        }),
        deleteGelPolishesKodi: builder.mutation<IProduct, IProduct>({
            query: (gelPolishesKodi) => ({
                url: `gel-polishes-kodi/${gelPolishesKodi._id}`,
                method: 'DELETE',
                body: gelPolishesKodi,
            }),
            invalidatesTags: ['gelPolishesKodi']
        }),
    }),
});

export const {useGetGelPolishesKodiQuery, useCreateGelPolishesKodiMutation, useDeleteGelPolishesKodiMutation, useUpdatedGelPolishesKodiMutation} = gelPolishesKodiApi
