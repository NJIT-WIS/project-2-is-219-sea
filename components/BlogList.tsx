import groq from 'groq'
import urlFor from '../lib/urlFor'
import ClientSideRoute from './ClientSideRoute'

export const query = groq
`
*[_type == 'post'] {
  ...,
  author ->,
  categories[]->
} | order(_createdAt desc)
`
// The commented stuff is stuff that is implmented correcrly but the test data is not set up for.
export function BlogList({data}) {
  return (
    <>
      {data.map(post => {
        return (
          <ClientSideRoute key={post._id} route={`/blog/${post.slug.current}`}>
            <div>
              {/* <img
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
              /> */}
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
                  ))} */}
                </div>
              </div>
            </div>
          </ClientSideRoute>
        )
      })}
    </>
  )
}