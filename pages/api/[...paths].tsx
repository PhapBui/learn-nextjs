// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpProxy from 'http-proxy'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  req.headers.cookie = ''

  proxy.web(req, res, {
    target: process.env.NEXT_APP_API,
    changeOrigin: true,
    selfHandleResponse: false,
  })

  //   res.status(200).json({ name: 'John Doe' })
}
