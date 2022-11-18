import '../styles/global.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />

    <Script strategy="lazyOnload" id="gatg-load">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
            
            (function (i, s, o, g, r, a, m) {
              i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                  (i[r].q = i[r].q || []).push(arguments);
              };
              i[r].l = 1 * new Date();
              a = s.createElement(o);
              m = s.getElementsByTagName(o)[0];
              a.async = 1;
              a.src = g;
              m.parentNode.insertBefore(a, m);
          })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
      
          gtag('js', new Date());
          gtag('config', 'G-KVHWG9JGFM');
          gtag('set', { 'user_id': 'USER_ID' }); 
            `}
    </Script>

    <Script
      src="https://cc.cdn.civiccomputing.com/9/cookieControl-9.x.min.js"
      type="text/javascript"
    ></Script>
    <Script strategy="lazyOnload" id="civic-load">
      {`
        var config = {
          apiKey: '592b99ebdf88c091dad9b556b6d8de236ac97687',
          product: 'PRO_MULTISITE',
        };

        CookieControl.load( config );
      `}
    </Script>

    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-T2QSK7G"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
    <Component {...pageProps} />
  </>
);

export default MyApp;
