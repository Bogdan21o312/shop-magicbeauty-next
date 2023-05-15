import type {AppProps} from "next/app";
import {wrapper} from "@/app/store/store";
import "../assets/styles/globals.scss"
import {Loader} from "@/app/UI";
import {usePreloader} from "@/app/hooks/usePreloader/usePreloader";


function MyApp({Component, pageProps}: AppProps) {

    const preloader = usePreloader()

    return (
        <>
            {preloader ? <Loader/> : <Component {...pageProps} />}
        </>
    )
}

export default wrapper.withRedux(MyApp);
