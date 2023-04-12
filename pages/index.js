import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

import UndrawTeaching from "../public/svgs/undraw_teaching.svg";

import Script from "next/script";
import Image from "next/image";

import Date from "../components/date";
import styles from "../components/layout.module.css";
import { NextSeo } from "next-seo";

export default function Home({ allPostsData }) {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <NextSeo
        title="Neural Nexus"
        description="This is a demo description"
        canonical="https://www.NeuralNexus.com"
        openGraph={{
          url: "https://www.NeuralNexus.com",
          title: "Open Graph Title",
          description: "Open Graph Description",
        }}
        twitter={{
          handle: "@NeuralNexus",
          site: "@NeuralNexus.com",
          cardType: "summary_large_image",
        }}
      />
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>{" "}
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <header className={styles.header}>
          <h1 className={utilStyles.headingXl}>
            Engage, Innovate, and Transform with AI-Powered Engineering Tools
          </h1>

          <UndrawTeaching className="svg-sizer" />
        </header>
        <main>
          <p>
            Welcome to MyWebClass.org, your go-to resource for exploring the
            possibilities of AI and advanced engineering tools in the classroom.
            Our mission is to empower educators to unleash their creativity and
            enhance the learning experience for students of all backgrounds.
            Join our community and discover how you can harness the power of AI
            to revolutionize the way you teach and engage with your students.
            Let's transform education together!
          </p>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
