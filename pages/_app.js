import { Providers } from "@/redux/store/providers";
import { store } from "@/redux/store";
import React, { useEffect, useState } from "react";
import "../public/Css/style.css";
import "../public/Css/responsive.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import TopHeader from "@/Components/TopHeader";

function MyApp({ Component, pageProps, data }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Providers store={store}>
        <Toaster position="top-center" reverseOrder={false} />

        <Head>
          <title>
            Top IT company in India | Web Developer | App Developer - wrteam
          </title>
          <meta
            name="description"
            content="Grow your business with our top web developers, app developers, graphic designers and digital marketing and IT consulting services provider specialists."
          />
          <meta name="viewport" content="initial-scale=1, width=device-width" />

          {/* whatsapp widget  */}
          <script
            type="text/javascript"
            src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
            id="aisensy-wa-widget"
            widget-id="ETrrDX"
          ></script>
        </Head>

        {/* <TopHeader /> */}
        <Header />

        <Component {...pageProps} data={data} />

        <Footer />
      </Providers>
    </>
  );
}

export default MyApp;
