import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {todosApi} from "@/app/store/post";
import {gelPolishesKodiApi} from "@/app/services/gel-polishes-kodi.api";
import {login} from "@/app/services/login.api";


const rootReducer = combineReducers({
    [todosApi.reducerPath]: todosApi.reducer,
    [gelPolishesKodiApi.reducerPath]: gelPolishesKodiApi.reducer,
    [login.reducerPath]: login.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                gelPolishesKodiApi.middleware,
                login.middleware,
            ),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
// @ts-ignore
export const wrapper = createWrapper<AppStore>(setupStore);
