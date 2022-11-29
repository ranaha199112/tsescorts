import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Advertise on TSescorts</title>
        <meta name="description" content="Advertise on TSescorts" />
      </Head>

      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
