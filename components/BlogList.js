import groq from "groq";
import formatDate from "../lib/utils/formatDate";
import Link from "../components/Link";
import { useState } from "react";
import Pagination from "./Pagination";

export const query = groq`
*[_type == 'post'] {
  ...,
  author ->,
  categories[]->
} | order(_createdAt desc)
`;
// The commented stuff is stuff that is implmented correcrly but the test data is not set up for.
export function BlogList({
  data,
  pagination,
  initialDisplayPosts = [],
  title,
}) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = data.filter((post) => {
    // getting all sort of contents to search
    let postCategories = "";
    post.categories.map((c) => {
      postCategories += c.title + " ";
    });

    let postContent = "";
    post.body.map((b) => {
      b.children.map((c) => {
        postContent += c.text + " ";
      });
    });

    const searchContent = post.title + postCategories + postContent;

    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : filteredBlogPosts;

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        {/* <button
          onClick={() => {
            console.log(data);
            console.log(pagination);
          }}
        >
          test
        </button> */}
        <ul>
          {!filteredBlogPosts.length && "No posts found."}
          {displayPosts.map((post) => {
            const date = post._createdAt;
            const slug = post.slug.current;
            const blogTitle = post.title;
            const summary = post.body[0].children[0].text;
            const categories = post.categories;
            const author = post.author.name;

            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      {author}
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {blogTitle}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {categories.map((category) => (
                          <p
                            key={category._id}
                            className="mr-3 text-sm font-medium uppercase text-primary-500"
                          >
                            {category.title}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary.substring(0, 200) + "..."}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
      {/* {data.map(post => {
        return (
          <ClientSideRoute key={post._id} route={`/blog/${post.slug.current}`}>
            <div>
              {/* <img
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
              /> }
              <div>
                <div>
                  <p className='font-bold'>{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div>
                  {/* {post.categories.map(category => (
                    <div>{category.title}</div>
                  ))} }
                </div>
              </div>
            </div>
          </ClientSideRoute>
        )
      })} */}
    </>
  );
}
