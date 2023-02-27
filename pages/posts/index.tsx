import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import * as React from 'react'

export interface PostListPageProps {
  posts: any[]
}

export default function PostList({ posts }: PostListPageProps) {
  return (
    <div>
      Post List Page
      <ul>
        {posts &&
          posts.map((a, b) => (
            <li key={b}>
              <Link href={`/posts/${a.id}`}>
                <a>{a.title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  //server-side
  //build-time
  console.log('static Props')

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()
  return {
    props: {
      posts: data.data.map((a: any) => ({ id: a.id, title: a.title })),
    },
  }
}
