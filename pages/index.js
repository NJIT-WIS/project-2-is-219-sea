import Head from "next/head";
import { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import UndrawTeaching from "../public/svgs/undraw_educator.svg";

import Script from "next/script";

import styles from "../components/layout.module.css";
import { NextSeo } from "next-seo";
import SubscribeModal from "../components/SubscribeModal";

export default function Home() {
  console.log(process.env.MAILCHIMP_API_KEY);
  return (
    <>
      <NextSeo
        title="MyWebClass"
        description="This is a demo description"
        canonical="https://www.MyWebClass.com"
        openGraph={{
          url: "https://www.MyWebClass.com",
          title: "MyWebClass",
          description:
            "Welcome to MyWebClass, the blog webpage that explores the exciting and ever-evolving world of artificial intelligence. From neural networks and deep learning to machine learning and natural language processing, we delve into the latest advancements and applications of AI across various industries and fields.s",
        }}
        twitter={{
          handle: "@MyWebClass",
          site: "@MyWebClass.com",
          cardType: "summary_large_image",
        }}
      />
      <div
        className="flex lg:flex-row flex-col-reverse mx-auto items-center justify-between lg:px-6 xl:py-16 py-6 bg-white rounded-lg lg:shadow-2xl dark:bg-gray-800 mt-6"
        style={{ maxWidth: "1500px" }}
      >
        <div className="flex flex-col justify-between lg:pe-4 py-4 ps-4 leading-snug lg:w-2/5 w-100">
          <header className={styles.header}>
            <h1 className="xl:text-5xl text-3xl font-extrabold leading-snug tracking-tight text-gray-900 dark:text-gray-100">
              Engage, Innovate, and Transform Education
            </h1>
          </header>

          <main>
            <p className="text-gray-600 dark:text-gray-400 my-4">
              Our mission is to empower educators to unleash their creativity
              and enhance the learning experience for students of all
              backgrounds.
              {/* Welcome

                to MyWebClass.org, your go-to resource for exploring the
                possibilities of AI and advanced engineering tools in the
                classroom. Our mission is to empower educators to unleash their
                creativity and enhance the learning experience for students of
                all backgrounds. Join our community and discover how you can
                harness the power of AI to revolutionize the way you teach and
                engage with your students. Let's transform education together! */}
            </p>
            <div className="my-4">
              <p className="text-gray-600 dark:text-gray-400">
                Let's transform education together!
              </p>
              <SubscribeModal btnClassName="lg:mt-12 mt-6 text-center" />
            </div>
          </main>
        </div>

        <UndrawTeaching className="svg object-cover w-3/4 rounded-t-lg" />
      </div>
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
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
    revalidate: 1,
  };
}
