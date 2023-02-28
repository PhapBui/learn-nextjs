import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import * as React from 'react'

export interface ParamsPageProps {}

export default function App(props: ParamsPageProps) {
  const router = useRouter()

  const [seconds, setSeconds] = React.useState(0)
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((x) => {
        if (x > 60) clearInterval(intervalId)
        return x + 1
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1>Params Page</h1>
      <p>Time: {seconds}</p>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate')
  await new Promise((res) => setTimeout(res, 3000))

  const postId = context.query.postId

  if (!postId) return { props: { query: context.query } }

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()

  return { props: { query: context.query, post: data } }
}
