import * as React from 'react';
import { Box } from '@mui/system';
import { Typography, Button, Container, Stack, Link as MuiLink } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import png from '@images/avatar.png';
import PostCard from './postCard';
import { Post } from '@models/post';
import { Work } from '@models/work';
import { WorkList } from '@components/work';
export function FeatureWork() {
  const workList: Work[] = [
    {
      id: 1,
      title: 'Making a design system from scratch',
      createdAt: '1648363391671',
      updatedAt: '1648363391671',
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      shortDescription: 'Short description work',
      thumbnailUrl:
        'https://res.cloudinary.com/dsjbcv5xe/image/upload/v1677660184/cld-sample-5.jpg',
    },
    {
      id: 2,
      title: 'Creating pixel perfect icons in Figma',
      createdAt: '1648363391671',
      updatedAt: '1648363391671',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      shortDescription: 'Short description work',
      thumbnailUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANuzW26OgZq2wVxkTuj7oZ5nUdPvTA2YKXg&usqp=CAU',
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
            Featured Work
          </Typography>
        </Stack>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
