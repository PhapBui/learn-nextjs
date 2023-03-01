import { getBlogList } from '@utils/blogs';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { MainLayout } from '@components/layouts';
import { Post } from '@models/post';
import { Box, Divider, Container } from '@mui/material';
import { PostItem } from '@components/blog';

export interface BlogListPageProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListPageProps) {
  return (
    <Box>
      <Container>
        <h1>Blog List</h1>
        <Box component={'ul'} sx={{ listStyleType: 'none', p: 0 }}>
          {posts &&
            posts.map((post) => (
              <li key={post.id}>
                <Link href={`/blogs/${post.slug}`} passHref>
                  <a>
                    <PostItem post={post} />
                  </a>
                </Link>
                <Divider sx={{ my: 2 }} />
              </li>
            ))}
        </Box>
      </Container>
    </Box>
  );
}

BlogList.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  //server-side
  //build-time

  const postList = await getBlogList();
  return {
    props: {
      posts: postList,
    },
  };
};
