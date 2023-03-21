import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { createWrapper } from "next-redux-wrapper";
import {todosApi} from "@/app/store/post";
import {gelPolishesKodiApi} from "@/app/services/gel-polishes-kodi.api";

const makeStore = () =>
    configureStore({
        reducer: {
            [todosApi.reducerPath]: todosApi.reducer,
            [gelPolishesKodiApi.reducerPath]: gelPolishesKodiApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                todosApi.middleware,
                gelPolishesKodiApi.middleware
            ]),
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
    >;

export const wrapper = createWrapper<AppStore>(makeStore);
