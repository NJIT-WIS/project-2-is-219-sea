import "../styles/global.css";
import "../styles/tailwind.css";
import "../styles/prism.css";

// next components
import Head from "next/head";

// node packages
import { ThemeProvider } from "next-themes";

// components
import PageWrapper from "../components/PageWrapper";

// others
import siteMetadata from "../data/siteMetadata";
import GAScript from "../components/GoogleAnalytics";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <GAScript />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  );
}
