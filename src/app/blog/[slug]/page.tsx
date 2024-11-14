import { createMathjaxInstance, mathjax } from '@mdit/plugin-mathjax';

import { ArrowLeft } from 'lucide-react';
import { Footer } from '~/components/modules/footer';
import Link from 'next/link';
import MarkdownIt from 'markdown-it';
import { abbr } from '@mdit/plugin-abbr';
import { estimateReadingTime } from '~/lib/utils';
import { getPostContent } from '~/lib/posts';
import { notFound } from 'next/navigation';
import { tasklist } from '@mdit/plugin-tasklist';

const mathjaxInstance = createMathjaxInstance({
  output: 'chtml',
  chtml: {
    scale: 1.15,
  },
});
const markdownIt = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})
  .use(abbr)
  .use(mathjax, mathjaxInstance)
  .use(tasklist);

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostContent(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = markdownIt.render(post.content || '');
  const updatedAt = new Date(post.date).toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'long',
  });

  return (
    <>
      <main className='mx-auto max-w-4xl px-5 pt-28 md:pt-36'>
        <Link
          href='/blog'
          className='flex w-fit items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-foreground'
        >
          <ArrowLeft className='h-4 w-4' />
          <span>Back to blog</span>
        </Link>

        <h1 className='mt-4 text-4xl font-semibold text-gray-100'>
          {post.title}
        </h1>
        <p className='mt-4 text-muted-foreground'>Last updated: {updatedAt}</p>
        <p className='mt-1 text-muted-foreground'>
          Reading time: {estimateReadingTime(post.content || '')}
        </p>

        <hr className='my-8' />

        <article
          className='prose prose-invert prose-neutral mb-16 min-w-full'
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </main>
      <Footer />
    </>
  );
}
