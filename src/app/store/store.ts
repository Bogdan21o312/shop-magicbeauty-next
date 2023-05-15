import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {todosApi} from "@/app/store/post";
import {gelPolishesKodiApi} from "@/app/services/gel-polishes-kodi.api";
import {register} from "@/app/services/register.api";
import myModalReducer from "./features/myModalSlice";
import {usersApi} from "@/app/screens/AdminDashboard/AdminDashboardUsers/modules/services/users.api";

const rootReducer = combineReducers({
    [todosApi.reducerPath]: todosApi.reducer,
    [gelPolishesKodiApi.reducerPath]: gelPolishesKodiApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [register.reducerPath]: register.reducer,
    myModal: myModalReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                gelPolishesKodiApi.middleware,
                usersApi.middleware,
                register.middleware,
            ),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

// @ts-ignore
export const wrapper = createWrapper <AppStore>(setupStore);
