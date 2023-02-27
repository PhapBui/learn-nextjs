import { useRouter } from 'next/dist/client/router'
import * as React from 'react'

export interface SinglePostProps {}

export default function SinglePost(props: SinglePostProps) {
  const router = useRouter()

  return <div>Single Post -id : {JSON.stringify(router.query.postId)}</div>
}
