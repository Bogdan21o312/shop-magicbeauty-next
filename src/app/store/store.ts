import {configureStore, ThunkAction, Action, combineReducers} from "@reduxjs/toolkit";
import {authSlice} from "./authSlice";
import {createWrapper} from "next-redux-wrapper";
import {todosApi} from "@/app/store/post";
import {gelPolishesKodiApi} from "@/app/services/gel-polishes-kodi.api";


const rootReducer = combineReducers({
    [todosApi.reducerPath]: todosApi.reducer,
    [gelPolishesKodiApi.reducerPath]: gelPolishesKodiApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                gelPolishesKodiApi.middleware,
            ),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']
// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore["getState"]>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
//     AppState,
//     unknown,
//     Action>;

// @ts-ignore
export const wrapper = createWrapper<AppStore>(setupStore);
