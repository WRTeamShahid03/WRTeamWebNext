
import React from 'react';
// ** Next Import
import Document, { Html, Head, Main, NextScript } from 'next/document';
const CustomDocument = () => {


    return (
        <Html>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />

                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

            </Head>

            <body>
                <Main />
                
                <NextScript />

                 {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></script> */}
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>

            </body>
        </Html>
    );
};
export default CustomDocument;






