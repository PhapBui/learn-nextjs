import * as React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { Post } from '@models/post';
import { format } from 'date-fns';

export interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box>
      <Typography component="h3" variant="h5" sx={{ fontWeight: 'bold' }}>
        {post.title}
      </Typography>

      <Typography variant="body1" component="div" my={2} sx={{ display: 'flex' }}>
        {format(new Date(post.publishedDate), 'dd - MMM - yyyy')}
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        {post?.tagList?.join(', ')}
      </Typography>

      <Typography>{post.description}</Typography>

      <Typography sx={{ my: 1, fontWeight: 'medium' }}>Author: {post.author.name}</Typography>
    </Box>
  );
}
