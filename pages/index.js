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
        title="MyWebClass | Home"
        description="MyWebClass.org empowers educators to revolutionize teaching and engage students using AI and advanced engineering tools. Join our community to explore the possibilities of AI in the classroom and transform education together."
        canonical="https://www.MyWebClass.org"
        openGraph={{
          url: "https://www.MyWebClass.org",
          title: "MyWebClass | Home",
          description:
            "MyWebClass.org empowers educators to revolutionize teaching and engage students using AI and advanced engineering tools. Join our community to explore the possibilities of AI in the classroom and transform education together.",
          images: [
            {
              url: "https://user-images.githubusercontent.com/114158692/235370839-a16539f4-1b90-4bff-ba2c-40cb2db4a825.png",
              width: 800,
              height: 600,
              alt: "unDraw.co Building Website Image",
            },
          ],
        }}
        twitter={{
          handle: "@MyWebClassSEA",
          site: "@MyWebClass",
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
              <SubscribeModal
                componentClassName="lg:mt-12 mt-6 text-center"
                btnText="Sign up now →"
                btnClassName="rounded-md border border-transparent bg-purple-200 px-4 py-2 text-xl inline-flex text-center items-center font-medium text-purple-900 hover:bg-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
              />
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
        async
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
