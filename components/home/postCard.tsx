import { PostItem } from '@components/blog';
import { Post } from '@models/post';
import { Card, CardContent } from '@mui/material';
export interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  );
}
