import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

import Link from 'next/link';
import { getPostsMetadata } from '~/lib/posts';

export default async function PostsPage() {
  const fetchedPosts = await getPostsMetadata();
  const posts = fetchedPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <main className='mx-auto max-w-4xl px-5 pt-28 md:pt-36'>
      <h1 className='text-3xl font-semibold'>All Blog Posts</h1>
      <p className='mt-1 text-muted-foreground'>
        Here&apos;s a list of all the blog posts I&apos;ve written.
      </p>

      <ul className='mt-8 flex flex-col gap-4'>
        {posts.map(post => (
          <Card key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <CardHeader>
                <CardTitle className='text-xl'>{post.title}</CardTitle>
                <CardDescription>
                  Last updated:{' '}
                  {new Date(post.date).toLocaleString('en-US', {
                    timeZone: 'UTC',
                    dateStyle: 'long',
                  })}
                  <br />
                  {post.description}
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </ul>
    </main>
  );
}
