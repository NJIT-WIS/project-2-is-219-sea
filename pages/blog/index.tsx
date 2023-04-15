import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "@/styles/utils.module.css";
// import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import { NextSeo } from "next-seo";
// import {PreviewSuspense} from 'next-sanity/preview'
// import {lazy} from 'react'
import {BlogList, query} from '../../components/BlogList'
import {client} from '../../lib/sanity.client'

// const PreviewBlogList = lazy(() => import('../../components/PreviewBlogList'))

export const getStaticProps = async ({preview = false}) => {
  if (preview) {
    return {props: {preview}}
  }

  const data = await client.fetch(query)

  return {props: {preview, data}}
}

export default function IndexPage({preview, data}) {
  // if (preview) {
  //   return (
  //     <PreviewSuspense fallback="Loading...">
  //       <PreviewBlogList />
  //     </PreviewSuspense>
  //   )
  // }

  return <BlogList data={data} />
}





// OLD CODE
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }



// export default function Home({preview, data }) {
  
//   return (
//     <>
//       <Layout home>
//         <Head>
//           <NextSeo
//             title="Neural Nexus"
//             description="This is a demo description"
//             canonical="https://www.NeuralNexus.com"
//             openGraph={{
//               url: "https://www.NeuralNexus.com",
//               title: "Neural Nexus",
//               description: "Blogs Page",
//             }}
//             twitter={{
//               handle: "@NeuralNexus",
//               site: "@NeuralNexus.com",
//               cardType: "summary_large_image",
//             }}
//           />
//         </Head>
//         <section className={utilStyles.headingMd}>
//           <p>[Your Self Introduction]</p>
//           <p>
//             (This is a sample website - you’ll be building a site like this in{" "}
//             <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//           </p>
//         </section>
//         <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//           <h2 className={`${utilStyles.headingLg} font-bold`}>Blog</h2>
//           {/* <ul className={utilStyles.list}>
//             {allPostsData.map(({ id, date, title }) => (
//               <li className={utilStyles.listItem} key={id}>
//                 <Link href={`/posts/${id}`}>{title}</Link>
//                 <br />
//                 <small className={utilStyles.lightText}>
//                   <Date dateString={date} />
//                 </small>
//               </li>
//             ))}
//           </ul> */}
//         </section>
//         {/* <Subscribe></Subscribe> */}
//       </Layout>
//     </>
//   );
// }