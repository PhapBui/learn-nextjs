import * as React from 'react';
import { Box } from '@mui/system';
import { Typography, Button, Container, Stack, Link as MuiLink } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import png from '@images/avatar.png';
import PostCard from './postCard';
import { Post } from '@models/post';
export function RecentPosts() {
  const postList: Post[] = [
    {
      id: 1,
      title: 'Making a design system from scratch',
      publishedDate: '2023-02-28T20:47:06Z',
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',

      author: {
        name: 'kakak',
        title: 'Front End',
        profileUrl: 'http://localhost:3000/blogs',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANuzW26OgZq2wVxkTuj7oZ5nUdPvTA2YKXg&usqp=CAU',
      },
      slug: '',
    },
    {
      id: 2,
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: '2023-02-28T20:47:06Z',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      author: {
        name: '',
        title: '',
        profileUrl: '',
        avatarUrl: '',
      },
      slug: '',
    },
  ];

  return (
    <Box component={'section'} bgcolor="secondary.light" py={{ md: 2, xs: 4 }}>
      <Container>
        <Stack
          direction={'row'}
          justifyContent={{ md: 'space-between', xs: 'center' }}
          textAlign={{ md: 'left', xs: 'center' }}
          alignItems="center"
        >
          <Typography component={'h1'} variant="h6" fontWeight="bold" mb={{ md: 2, xs: 2 }}>
            Recent Posts
          </Typography>

          <Link href="/blogs" passHref>
            <MuiLink sx={{ display: { xs: 'none', md: 'inline-block' } }}>View All</MuiLink>
          </Link>
        </Stack>

        <Stack
          spacing={2}
          direction={{ md: 'row', xs: 'column' }}
          justifyContent="space-between"
          sx={{
            '&>div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
