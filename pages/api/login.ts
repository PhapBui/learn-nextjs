// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpProxy, { ProxyReqCallback } from 'http-proxy';
import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

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

  return new Promise((resolve, reject) => {
    req.headers.cookie = '';

    const handleLoginResponce = (proxyRes: any, req: any, res: any) => {
      let body = '';
      proxyRes.on('data', function (chunk: any) {
        body += chunk;
      });

      proxyRes.on('end', function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);

          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });

          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          });

          (res as NextApiResponse).status(200).json({ message: 'success', token: accessToken });
        } catch (error) {
          (res as NextApiResponse).status(500).json({ message: 'sth wrong' });
        }
        resolve(true);
      });

      return;
    };
    //@type-check
    proxy.once('proxyRes', handleLoginResponce);

    proxy.web(req, res, {
      target: process.env.NEXT_APP_API,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });

  //   res.status(200).json({ name: 'John Doe' })
}
