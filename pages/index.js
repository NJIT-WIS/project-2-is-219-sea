// next components
import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Script from "next/script";

import CustomListItem from "../components/CustomListItem";
import { siteTitle } from "../components/layout";
import styles from "../components/layout.module.css";
import SubscribeModal from "../components/SubscribeModal";
import { getSortedPostsData } from "../lib/posts";

// images / svgs
import tejPic from "../public/images/tej_patel.jpg";
import marioPic from "../public/images/salah.jpg";
import rachealPic from "../public/images/racheal.jpg";
import UndrawTeaching from "../public/svgs/undraw_educator.svg";
import UndrawChecklist from "../public/svgs/undraw_checklist.svg";
import ReactStars from "react-stars";

export default function Home() {
  const pitchingOfferList = [
    "Help shape the future of education and technology",
    "Join a team of passionate individuals who share your values",
    "Gain valuable experience and skills in tech and education",
    "Be part of a community that values your contributions and supports your growth",
    "Expand your professional network and make meaningful connections",
    "Share your knowledge and expertise with others and learn from them",
    "Receive recognition for your hard work and dedication Feel proud of the work you do and the difference you make",
  ];

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
        <meta
          name="google-site-verification"
          content="zo3akath6oM_ovbSiBakfiWSQuEREnwDsFM5r7AF1wY"
        />
      </Head>{" "}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div
        className="flex lg:flex-row flex-col-reverse mx-auto items-center justify-between lg:px-6 xl:py-10 py-6 bg-white rounded-lg lg:shadow-2xl dark:bg-gray-800 mt-6"
        style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}
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
            </p>
            <div className="my-4">
              <p className="text-gray-600 dark:text-gray-400">
                Let's transform education together!
              </p>
              <a
                href="#learnMore"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Learn more
              </a>
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
      <hr className="lg:hidden w-1/2 h-1 mx-auto mb-4 dark:bg-gray-500 border-0 rounded bg-gray-400" />
      <div
        id="learnMore"
        className="flex justify-between gap-4 px-2 lg:flex-row flex-col-reverse mx-auto items-center lg:px-6 xl:py-10 py-6 bg-white rounded-lg lg:shadow-2xl dark:bg-gray-800 mt-6"
        style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}
      >
        <div className="flex flex-col lg:w-1/2 lg:pe-4 py-4 ps-4 leading-snug">
          <header className={styles.header}>
            <h1 className="xl:text-4xl text-2xl mb-4 font-extrabold leading-snug tracking-tight text-gray-900 dark:text-gray-100">
              Shape the Future with MyWebClass.org
            </h1>
          </header>
          <main>
            <ul className="my-4 max-w-md space-y-1 text-gray-600 dark:text-gray-400 list-inside">
              {pitchingOfferList.map((listItem, i) => {
                return <CustomListItem key={i} listContent={listItem} />;
              })}
            </ul>
          </main>
        </div>
        <div className="w-4/5 text-center">
          <UndrawChecklist
            className="mx-auto rounded-t-lg"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>
      <hr className="lg:hidden w-1/2 h-1 mx-auto mb-4 dark:bg-gray-500 border-0 rounded bg-gray-400" />
      <div
        className="flex justify-between gap-4 lg:flex-row flex-col mx-auto items-center xl:py-10 py-6 px-4 lg:px-0"
        style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}
      >
        <div className="bg-white rounded-lg shadow-2xl dark:bg-gray-800 mt-6 lg:w-1/3 w-full h-80">
          <div className="flex flex-col items-center pt-10 pb-10">
            <Image
              fetchPriority="low"
              src={tejPic}
              width={130}
              height={130}
              className="rounded-full mb-4 w-[130px] h-[130px] object-cover"
              alt={"Tej Patel"}
            />
            <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Tej Patel
            </p>
            <span className="text-center text-sm text-gray-500 dark:text-gray-400">
              "This service changed my life."
            </span>
            <ReactStars edit={false} count={5} size={50} color1={"#ffd700"} />{" "}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl dark:bg-gray-800 mt-6 lg:w-1/3 w-full h-80">
          <div className="flex flex-col items-center pt-10 pb-10">
            <Image
              fetchPriority="low"
              src={rachealPic}
              width={130}
              height={130}
              className="rounded-full mb-4 w-[130px] h-[130px] object-cover"
              alt={"Racheal Fekri"}
            />
            <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Racheal Fekri
            </p>
            <span className="text-center text-sm text-gray-500 dark:text-gray-400">
              "Absolutely amazing, exceeded expectations!"
            </span>
            <ReactStars edit={false} count={5} size={50} color1={"#ffd700"} />{" "}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-2xl dark:bg-gray-800 mt-6 lg:w-1/3 w-full h-80">
          <div className="flex flex-col items-center pt-10 pb-10">
            <Image
              fetchPriority="low"
              src={marioPic}
              width={130}
              height={130}
              className="rounded-full mb-4 w-[130px] h-[130px] object-cover"
              alt={"Mario Salah"}
            />
            <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Mario Salah
            </p>
            <span className="text-center text-sm text-gray-500 dark:text-gray-400">
              "Exceptional service, highly recommended!"
            </span>
            <ReactStars edit={false} count={5} size={50} color1={"#ffd700"} />
          </div>
        </div>
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
