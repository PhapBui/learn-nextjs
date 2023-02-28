import { AdminLayout } from '@components/layouts';
import { useAuth } from '@hooks/use-auth';
import { useRouter } from 'next/dist/client/router';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
export interface AboutPageProps {}

const DynamicHeader = dynamic(() => import('@components/Common/Header'), {
  ssr: false,
});
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
    <div>
      <h3>About Page</h3>
      <button onClick={handleLogOutClick}>Logout</button>
      <DynamicHeader />
      <ul className="post-list">
        {postList.map((a) => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>

      <button onClick={hanleChangeNextPage}>next page</button>
    </div>
  );
}
AboutPage.Layout = AdminLayout;
