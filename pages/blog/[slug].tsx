
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



const Post = (props) => {
  return (
    <div>
      <h1>
        Title: {props.title}
      </h1>
      <p>
        categories:
        {props.categories.map(category => (
                <div>{category.title}</div>
        ))}
      </p>
        {/* Same thing for images */}
      <div>
        Images:
          <img
            src={urlFor(props.mainImage).url()}
            alt={props.author.name}
          />
      </div>
        {/* This took alot of time dont change it too much */}
        {props.body.map(block => (
          <p>{block.children[0].text}</p>
        ))}

    </div>
  )
}

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post