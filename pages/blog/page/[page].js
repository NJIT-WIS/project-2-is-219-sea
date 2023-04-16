import { BlogList, query } from "../../../components/BlogList";
import { client } from "../../../lib/sanity.client";
import { POSTS_PER_PAGE } from "../index";

export async function getStaticPaths({ preview = false }) {
  if (preview) {
    return { props: { preview } };
  }
  const data = await client.fetch(query);
  const totalPages = Math.ceil(data.length / POSTS_PER_PAGE);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context;
  const data = await client.fetch(query);
  const pageNumber = parseInt(page);
  const initialDisplayPosts = data.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(data.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      data,
      initialDisplayPosts,
      pagination,
    },
  };
}

export default function BlogPage({ data, initialDisplayPosts, pagination }) {
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
