import * as React from 'react';
import { Box } from '@mui/system';
import { Typography, Button, Container, Stack, Link as MuiLink } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import png from '@images/avatar.png';
import PostCard from './postCard';
export function RecentPosts() {
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
          <Box>
            <PostCard />
          </Box>
          <Box>
            <PostCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
