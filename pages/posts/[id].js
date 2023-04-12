import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

import { NextSeo } from "next-seo";

export default function Post({ postData }) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-QKD03YMMCM"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());

        gtag('config', 'G-QKD03YMMCM');
      </script>
      <NextSeo
        title={postData.title}
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
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
