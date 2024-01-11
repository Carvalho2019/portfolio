import { Header } from "../components/Header";
import { useState } from "react";

import "../styles/global.scss"


function MyApp({ Component, pageProps }) {
 
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>)
}

export default MyApp
