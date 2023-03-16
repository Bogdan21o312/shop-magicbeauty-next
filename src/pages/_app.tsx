import '@/assets/styles/globals.scss'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {setupStore} from "@/store/store";
import {LayoutMain} from "@/layouts/LayoutMain";
import {Header} from "@/layouts/LayoutMain/Hedaer";

const store = setupStore()


export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Header/>
            <Component {...pageProps} />
        </Provider>
    )
}
