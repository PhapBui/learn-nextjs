// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from 'cookies';
import httpProxy from 'http-proxy';
import { NextApiRequest, NextApiResponse } from 'next';
type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: `${req.method} method is not supported!` });
  }

  const cookies = new Cookies(req, res);

  const accessToken = cookies.set('access_token');

  res.status(200).json({ message: 'Logout success' });
  //   res.status(200).json({ name: 'John Doe' })
}
