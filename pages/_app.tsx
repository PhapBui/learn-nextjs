import { EmptyLayout } from '@components/layouts';
import { AppPropsWithLayout } from '@models/common';
import '../styles/globals.css';
import useSWR, { SWRConfig } from 'swr';
import axiosClient from '@api/axios-client';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <SWRConfig
      value={{
        fetcher: (url, init) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
