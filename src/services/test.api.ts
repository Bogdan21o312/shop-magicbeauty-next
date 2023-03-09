import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "@/config";
import {HYDRATE} from "next-redux-wrapper";
export interface ITest {
    id: number,
    body: string,
    postId: string
}

export const testAPI = createApi({
    reducerPath: 'testAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        fetchAllTest: build.query<ITest[], any>({
            query: () => ({
                url: '/test'
            })
        })
    })
})

