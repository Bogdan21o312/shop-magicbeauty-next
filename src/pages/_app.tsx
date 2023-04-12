import type {AppProps} from "next/app";
import {wrapper} from "@/app/store/store";
import "../assets/styles/globals.scss"
import {useEffect, useState} from "react";
import {router} from "next/client";
import {Loader} from "@/app/UI";
import {useRouter} from "next/router";
import {usePreloader} from "@/app/hooks/usePreloader";


function MyApp({Component, pageProps}: AppProps) {

    const preloader = usePreloader()

    return (
        <>
            {preloader ? <Loader/> : <Component {...pageProps} />}
        </>
    )
}

export default wrapper.withRedux(MyApp);
