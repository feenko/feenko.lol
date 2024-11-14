import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  content?: string;
}

async function getPostMetadataFromFile(filePath: string): Promise<Post> {
  const fileContents = await fs.promises.readFile(filePath, 'utf-8');
  const matterResult = matter(fileContents);
  return {
    slug: path.basename(filePath, '.md'),
    content: matterResult.content,
    ...matterResult.data,
  } as Post;
}

export async function getPostsMetadata(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const files = await fs.promises.readdir(postsDirectory);

  const markdownPosts = files.filter(file => file.endsWith('.md'));

  const posts = await Promise.all(
    markdownPosts.map(fileName =>
      getPostMetadataFromFile(path.join(postsDirectory, fileName)),
    ),
  );

  return posts;
}

export async function getPostContent(slug: string): Promise<Post | undefined> {
  const posts = await getPostsMetadata();
  return posts.find(post => post.slug === slug);
}
