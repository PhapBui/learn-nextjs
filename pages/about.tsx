import { MainLayout } from '@components/layouts'
import { useRouter } from 'next/dist/client/router'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
export interface AboutPageProps {}

const DynamicHeader = dynamic(() => import('@components/Common/Header'), {
  ssr: false,
})
export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([])
  const router = useRouter()

  const page = Number(router.query?.page)

  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()
      setPostList(data.data)
    })()
  }, [page])

  function hanleChangeNextPage() {
    router.push(
      {
        pathname: 'about',
        query: {
          page: (Number(router.query?.page) || 0) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div>
      <h3>About Page</h3>
      <DynamicHeader />
      <ul className="post-list">
        {postList.map((a) => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>
      <button onClick={hanleChangeNextPage}>next page</button>
    </div>
  )
}
AboutPage.Layout = MainLayout
