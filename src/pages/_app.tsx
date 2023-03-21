import type {AppProps} from "next/app";
import {wrapper} from "@/app/store/store";
import "../assets/styles/globals.scss"
import {LayoutMain} from "@/app/layouts";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <LayoutMain>
            <Component {...pageProps} />
        </LayoutMain>
    )
}

export default wrapper.withRedux(MyApp);
