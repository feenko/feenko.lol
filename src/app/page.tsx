import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { repos, technologies } from '~/lib/utils';

import { ArrowRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Footer } from '~/components/modules/footer';
import { GithubCard } from '~/components/ui/github-card';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export default async function Home() {
  const [githubData, githubOrgData] = await Promise.all([
    fetch('https://api.github.com/users/feenko')
      .then(res => res.json())
      .catch(() => null),
    fetch('https://api.github.com/users/meteor-discord')
      .then(res => res.json())
      .catch(() => null),
  ]);

  return (
    <>
      <div className='bg-grid mx-auto flex min-h-screen flex-col items-center justify-center gap-6 px-4 sm:px-8 md:px-12 xl:flex-row xl:px-20'>
        <div className='mt-32 max-w-2xl flex-1 text-center xl:mt-0 xl:text-left'>
          <h1 className='text-5xl font-semibold'>
            Feenko
            <span className='hidden xl:inline'>_</span>
          </h1>
          <p className='mt-3 text-lg text-muted-foreground xl:text-xl'>
            Developer, Designer, and Taco Hemingway lover.
            <br />
            Available for work and collaborations.
          </p>

          <div className='mt-5 flex flex-row justify-center gap-2 xl:justify-start'>
            <Button asChild>
              <Link href='/blog' prefetch={true}>
                <span>Visit Blog</span>
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
            <Button variant={'outline'} asChild>
              <a
                href='https://github.com/feenko/feenko.lol'
                target='_blank'
                rel='noopener noreferrer'
              >
                Edit on GitHub
              </a>
            </Button>
          </div>

          <p className='mt-3 text-sm text-muted-foreground'>
            built on{' '}
            {new Date(process.env.BUILD_DATE || Date.now()).toLocaleString(
              'en-US',
              {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              },
            )}{' '}
            (commit: {process.env.COMMIT_HASH})
          </p>
        </div>

        <div className='my-20 flex flex-col gap-4 md:my-0 md:w-1/2 xl:flex-row'>
          <GithubCard githubData={githubData} title='My Github profile' />
          <GithubCard
            githubData={githubOrgData}
            title='My Github organization'
          />
        </div>
      </div>

      <div className='mx-auto my-20 mb-48 xl:w-1/2'>
        <h1 className='text-center text-3xl font-semibold'>Technologies</h1>
        <p className='mt-1 text-center text-muted-foreground'>
          Technologies i have experience with
        </p>

        <Marquee
          speed={50}
          gradient
          gradientColor='black'
          autoFill
          pauseOnHover
          className='mt-16 overflow-hidden'
        >
          {technologies.map(tech => (
            <a href={tech.url} target='_blank' rel='noreferrer' key={tech.name}>
              <Image
                src={tech.path}
                alt={tech.name}
                width={50}
                height={50}
                className='mx-6 opacity-40 transition-opacity duration-150 hover:opacity-90 md:mx-8'
              />
            </a>
          ))}
        </Marquee>
      </div>

      <div className='mx-auto my-20 max-w-4xl px-4 sm:px-6 lg:px-8'>
        <h1 className='text-center text-3xl font-semibold'>Pinned Repos</h1>
        <p className='mt-1 text-center text-muted-foreground'>
          Some of my favorite projects
        </p>

        <div className='mt-12 grid grid-cols-2 gap-4'>
          {repos.map(repo => (
            <Card key={repo.name}>
              <a
                href={`https://github.com/${repo.name}`}
                target='_blank'
                rel='noreferrer'
              >
                <CardHeader>
                  <CardTitle className='flex items-center gap-1'>
                    <Image
                      src='/repo.svg'
                      alt={repo.name}
                      width={16}
                      height={16}
                    />
                    <span>{repo.name}</span>
                  </CardTitle>
                  <CardDescription>{repo.description}</CardDescription>
                </CardHeader>
              </a>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
