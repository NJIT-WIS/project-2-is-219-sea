
import groq from 'groq'
import { client } from '../../lib/sanity.client'
import urlFor from '../../lib/urlFor';

const query = groq`
*[_type =='post' && slug.current == $slug][0]{
  ...,
  author->,
  categories[]->,
}
`;

function Post ({post}) {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = []
  } = post
  return (
    // <div>hello</div>
    <div>
      <h1>
        Title: {post.title}
      </h1>
      <div>
        categories:
        {post.categories.map(category => (
                <p>{category.title}</p>
        ))}
      </div>
        {/* Same thing for images */}
      <div>
        Images:
          <img
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
          />
      </div>
      <div>
        {post.body.map(block => (
            <p className='text-right'>{block.children[0].text}</p>
          ))}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}

export default Post