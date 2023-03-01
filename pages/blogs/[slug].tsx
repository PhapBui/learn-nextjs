import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getBlogList } from '@utils/blogs';
import { Post } from '@models/post';
import { unified } from 'unified';
import remarkParse from 'remark-parse/lib';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeDocument from 'rehype-document';
import rehypeStringify from 'rehype-stringify';
import { Divider } from '@mui/material';
import { Container } from '@mui/system';
import { MainLayout } from '@components/layouts';

export interface BlogDetailsProps {
  post: Post;
}

export default function BlogDetailsPage({ post }: BlogDetailsProps) {
  // if (!post) return null
  return (
    <Container>
      Blog Detail Page
      <h2>{post.title}</h2>
      <p>{post.author.name}</p>
      <p>{post.description}</p>
      <Divider />
      <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
    </Container>
  );
}

BlogDetailsPage.Layout = MainLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getBlogList();

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogDetailsProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await await getBlogList();
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const post = postList.find((x) => x.slug === slug);

  if (!post) return { notFound: true };
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: 'Blog details Page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post?.mdContent || '');

  post.htmlContent = file?.toString();

  return {
    props: {
      post,
    },
  };
};
