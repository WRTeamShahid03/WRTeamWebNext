"use client"
import React, { useEffect } from 'react'
import "../public/Css/style.css"
import "../public/Css/responsive.css"
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


function MyApp({ Component, pageProps, data }) {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>

            <Head>
                <title>Top IT company in India | Web Developer | App Developer - wrteam</title>
                <meta name="description" content="Grow your business with our top web developers, app developers, graphic designers and digital marketing and IT consulting services provider specialists." />
                <meta name='viewport' content='initial-scale=1, width=device-width' />
            </Head>

            <Header />

            <Component {...pageProps} data={data} />

            <Footer />
        </>
    );
}

export default MyApp;
