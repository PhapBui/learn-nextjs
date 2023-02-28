// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | {
      data: any[]
      paginationg: any
    }
  | {
      name?: string
    }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {
    return res.status(404).json({ name: 'method not supported' })
  }

  res.status(200).json({ name: 'get list of product' })
}
