import type {AppProps} from "next/app";
import {wrapper} from "@/app/store/store";
import "../assets/styles/globals.scss"


function MyApp({Component, pageProps}: AppProps) {
    return (
        <Component {...pageProps} />
    )
}

export default wrapper.withRedux(MyApp);
