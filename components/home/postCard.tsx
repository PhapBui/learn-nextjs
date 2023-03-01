import { Post } from '@models/post';
import { CardContent } from '@mui/material';
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import * as React from 'react';
import { format } from 'date-fns';
export interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <Typography component="h3" variant="h5" sx={{ fontWeight: 'bold' }}>
          {post.title}
        </Typography>

        <Typography variant="body1" component="div" my={2} sx={{ display: 'flex' }}>
          {format(Number(post.publishedDate), 'dd - MMM - yyyy')}
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          {post?.tagList?.join(', ')}
        </Typography>

        <Typography>{post.description}</Typography>

        <Typography sx={{ my: 1, fontWeight: 'medium' }}>Author: {post.author}</Typography>
      </CardContent>
    </Card>
  );
}
