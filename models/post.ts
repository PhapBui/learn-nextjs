export interface Author {
  name: string;
  title: string;
  profileUrl: string;
  avatarUrl: string;
}

export interface Post {
  id: string | number;
  title: string;
  publishedDate: string;
  tagList?: string[];
  description: string;
  thumbnailUrl?: string;

  author: Author;
  slug: string;

  mdContent?: string | 'Chua co bai viet';
  htmlContent?: string;
}
