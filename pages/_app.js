import "../styles/global.css";
import "../styles/tailwind.css";
import "../styles/prism.css";

// next components
import Head from "next/head";

// node packages
import { ThemeProvider } from "next-themes";

// components
import PageWrapper from "../components/PageWrapper";

// Scripts
import Script from "next/script";

// others
import siteMetadata from "../data/siteMetadata";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Script
        strategy="lazyOnload"
        // id = G-QKD03YMMCM
        src={`https://www.googletagmanager.com/gtag/js?id=G-QKD03YMMCM`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QKD03YMMCM');
          `}
      </Script>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  );
}
