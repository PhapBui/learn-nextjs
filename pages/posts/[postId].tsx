import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

export interface SinglePostProps {
  post: any
}

export default function App({ post }: SinglePostProps) {
  // if (!post) return null
  return (
    <div>
      page single post
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=1`)
  const data = await response.json()

  return {
    paths: data.data.map((a: any) => ({ params: { postId: a.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<SinglePostProps> = async (
  context: GetStaticPropsContext
) => {
  //server-side
  //build-time
  const postId = context.params?.postId

  // if (postId) return { notFound: true }

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()

  return {
    props: {
      post: data,
    },
    revalidate: 5,
  }
}
