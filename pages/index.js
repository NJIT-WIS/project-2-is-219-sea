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
import SubscribeModal from "../components/SubscribeModal";

export default function Home({ allPostsData }) {
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

      <div className={styles.container}>
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800">
          <div class="flex flex-col justify-between p-4 leading-normal">
            <header className={styles.header}>
              <h1 className={utilStyles.headingXl}>
                Engage, Innovate, and Transform with AI-Powered Engineering
                Tools
              </h1>
            </header>

            <main>
              <p className="text-gray-600 dark:text-gray-400">
                Welcome to MyWebClass.org, your go-to resource for exploring the
                possibilities of AI and advanced engineering tools in the
                classroom. Our mission is to empower educators to unleash their
                creativity and enhance the learning experience for students of
                all backgrounds. Join our community and discover how you can
                harness the power of AI to revolutionize the way you teach and
                engage with your students. Let's transform education together!
              </p>
              <div className="my-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Interested and would like to learn more? Stay up to date and
                  subscribe to our newsletter!
                </p>
                <SubscribeModal btnClassName="flex justify-end mt-8" />
              </div>
            </main>
          </div>

          <UndrawTeaching className="svg object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" />
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
        {/* <header className={styles.header}>
          <h1 className={utilStyles.headingXl}>
            Engage, Innovate, and Transform with AI-Powered Engineering Tools
          </h1>

          <UndrawTeaching className="svg my-10" />
        </header> */}
        {/* <main>
          <p>
            Welcome to MyWebClass.org, your go-to resource for exploring the
            possibilities of AI and advanced engineering tools in the classroom.
            Our mission is to empower educators to unleash their creativity and
            enhance the learning experience for students of all backgrounds.
            Join our community and discover how you can harness the power of AI
            to revolutionize the way you teach and engage with your students.
            Let's transform education together!
          </p>
          <div className="my-4">
            <p>
              Interested and would like to learn more? Stay up to date and
              subscribe to our newsletter!
            </p>
            <SubscribeModal btnClassName="flex justify-end mt-8" />
          </div>
        </main> */}
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
    revalidate: 1,
  };
}
