import React from 'react';
// import Head from 'next/head';

const LayoutDefault = ({title, children}) => {
    return (
        <div>
            {/* <Head> */}
                <meta charSet="utf-8" />
                <title>Urban24 - {title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" type="image/png" href="./images/favicon.ico" />
                <meta property="og:title"         content="Urban 24 contest" />
                <meta property="og:description"   content="Join to win" />
                <meta property="og:image"         content="http://www.your-domain.com/path/image.jpg" />
            {/* </Head> */}

            {children}
        </div>
    )
}

export default LayoutDefault;