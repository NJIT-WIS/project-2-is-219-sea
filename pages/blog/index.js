import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Subscribe from "../components/Subscribe";
import { NextSeo } from "next-seo";

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <NextSeo
            title="Neural Nexus"
            description="This is a demo description"
            canonical="https://www.NeuralNexus.com"
            openGraph={{
              url: "https://www.NeuralNexus.com",
              title: "Neural Nexus",
              description: "Blogs Page",
            }}
            twitter={{
              handle: "@NeuralNexus",
              site: "@NeuralNexus.com",
              cardType: "summary_large_image",
            }}
          />
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this in{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={`${utilStyles.headingLg} font-bold`}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
        {/* <Subscribe></Subscribe> */}
      </Layout>
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
