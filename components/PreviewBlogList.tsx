'use client'

import {usePreview} from '../lib/sanity.preview'
import {query, BlogList} from '../components/BlogList'

export default function PreviewBlogList({token}) {
  const data = usePreview(token, query)
  return <BlogList data={data} />
}