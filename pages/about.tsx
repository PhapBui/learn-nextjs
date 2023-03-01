import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

import { Header } from '@components/Common';
import { AdminLayout } from '@components/layouts';
import { useAuth } from '@hooks/use-auth';
export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();

  const page = Number(router.query?.page);
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });
  useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
      const data = await response.json();
      setPostList(data.data);
    })();
  }, [page]);

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
    );
  }
  async function handleLogOutClick() {
    try {
      await logout();
    } catch (error) {}
  }
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>
      <button onClick={handleLogOutClick}>Logout</button>
      <Header />
      <ul className="post-list">
        {postList.map((a: any) => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>

      <button onClick={hanleChangeNextPage}>next page</button>
    </Box>
  );
}
AboutPage.Layout = AdminLayout;
