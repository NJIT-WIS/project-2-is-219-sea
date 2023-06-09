import groq from "groq";
import { client } from "../../lib/sanity.client";
import urlFor from "../../lib/urlFor";
import Head from "next/head";
import { siteTitle } from "../../components/layout";
import styles from "../../components/layout.module.css";
import { NextSeo } from "next-seo";
import Script from "next/script";
import formatDate from "../../lib/utils/formatDate";
import SubscribeModal from "../../components/SubscribeModal";
import { PortableText } from "@portabletext/react";
import CustomPortableTextComponents from "../../components/CustomPortableTextComponents";
import Image from "next/image";

import { useRouter } from "next/router";

const query = groq`
*[_type =='post' && slug.current == $slug][0]{
  ...,
  author->,
  categories[]->,
}
`;

export async function generateSaticParams() {
  const query = groq`
  *[_type == 'post']{
    slug
  }
  `;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

function Post({ post, home }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Data is loading</h1>;
  }

  return (
    <div style={{ animation: "transitionIn 1s", maxWidth: "1500px" }}>
      <NextSeo
        title="MyWebClass | Blog"
        description="Stay ahead in the world of teaching and learning with MyWebClass.org's informative blogs."
        canonical="https://www.MyWebClass.org"
        openGraph={{
          url: "https://www.MyWebClass.org",
          title: "MyWebClass | Blog",
          description:
            "Stay ahead in the world of teaching and learning with MyWebClass.org's informative blogs.",
          images: [
            {
              url: "https://user-images.githubusercontent.com/114158692/235371267-88de76ee-9e07-43e5-b483-36b356a2a465.png",
              width: 800,
              height: 600,
              alt: "unDraw.co Blog Post Image",
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
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <header className={styles.header + " mb-10"}>
        <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          {formatDate(post._createdAt)}
        </p>
        <h1 className="text-4xl text-center font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-1">
          {post.title}
        </h1>
        <div className="flex flex-wrap">
          {post.categories.map((category) => (
            <p
              key={category._id}
              className="mr-3 text-sm font-medium uppercase text-primary-500"
            >
              {category.title}
            </p>
          ))}
        </div>
        {post.mainImage && (
          <Image
            fetchPriority="low"
            className="m-8"
            width={600}
            height={350}
            src={urlFor(post.mainImage).url()}
            alt={"unDraw.co: " + post.title}
          />
        )}
        <p className="text-basefont-medium leading-6 text-gray-500 dark:text-gray-400">
          {"By " + post.author.name}
        </p>
      </header>
      <main>
        <section className="mb-8">
          <PortableText
            value={post.body}
            components={CustomPortableTextComponents}
          ></PortableText>
        </section>
      </main>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-4">
        <button
          className="rounded-md border border-transparent bg-purple-200 px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
          onClick={() => router.back()}
        >
          ← Back to blogs
        </button>
        <SubscribeModal
          componentClassName=""
          btnText="Subscribe for more!"
          btnClassName="rounded-md border border-transparent bg-purple-200 px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
        />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}

export default Post;
