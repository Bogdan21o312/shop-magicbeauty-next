import '@/assets/styles/globals.scss'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {setupStore} from "@/store/store";
import {LayoutMain} from "@/layouts/LayoutMain";

const store = setupStore()


export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <style jsx global>
                {`
                  body {
                    body {
    font-family: 'Montserrat', sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    // outline: none;
  }

  a:focus,
  a:active {
    // outline: none;
  }

  html,
  body {
    height: 100%;
    min-width: $minWidth + px;
  }

  body {
    line-height: 1;
    font-family: $fontFamily;
    font-size: $fontSize;
    //text-rendering: optimizeLegibility;
    color: $ColorDark;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  button,
  textarea {
    font-family: $fontFamily;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }

  a {
    color: inherit;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }
                  }
                `}
            </style>
            <LayoutMain>
                <Component {...pageProps} />
            </LayoutMain>
        </Provider>
    )
}
