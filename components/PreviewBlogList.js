"use client";

import { usePreview } from "../lib/sanity.preview";
import { query, BlogList } from "./BlogList";

export default function PreviewBlogList({ token }) {
  const data = usePreview(token, query);
  return <BlogList data={data} pagination={5} title="Latest Blogs" />;
}
