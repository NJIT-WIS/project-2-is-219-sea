import { BlogList, query } from "../../components/BlogList";
import { client } from "../../lib/sanity.client";

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
      pagination 
    }, 
    revalidate: 1 };
};

export default function IndexPage({
  data,
  initialDisplayPosts,
  pagination,
}) {
  return (
    <>
      <BlogList
        data={data}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Latest Blogs"
      />
    </>
  );
}
