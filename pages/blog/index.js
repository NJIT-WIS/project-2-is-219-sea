import { BlogList, query } from "../../components/BlogList";
import { client } from "../../lib/sanity.client";
import { NextSeo } from "next-seo";

// const PreviewBlogList = lazy(() => import('../../components/PreviewBlogList'))
export const POSTS_PER_PAGE = 5;

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }
  const data = await client.fetch(query);
  const initialDisplayPosts = data.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(data.length / POSTS_PER_PAGE),
  };
  return {
    props: {
      data,
      initialDisplayPosts,
      pagination,
    },
    revalidate: 1,
  };
};

export default function IndexPage({ data, initialDisplayPosts, pagination }) {
  return (
    <>
      <NextSeo
        title="MyWebClass | Blogs"
        description="Stay ahead in the world of teaching and learning with MyWebClass.org's informative blogs."
        canonical="https://www.MyWebClass.org"
        openGraph={{
          url: "https://www.MyWebClass.org",
          title: "MyWebClass | Blogs",
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
      <BlogList
        data={data}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Latest Blogs"
      />
    </>
  );
}
