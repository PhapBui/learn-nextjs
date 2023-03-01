import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import * as React from 'react';

export interface PostCardProps {}

export default function PostCard(props: PostCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography>Title</Typography>
      </CardContent>
    </Card>
  );
}
