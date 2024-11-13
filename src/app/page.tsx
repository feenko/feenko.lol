import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '~/components/ui/card';
import { GitHubUser } from '~/lib/types';
import { technologies } from '~/lib/utils';

export default async function Home() {
  const githubData: GitHubUser = await fetch(
    'https://api.github.com/users/feenko',
  )
    .then(res => res.json())
    .catch(() => null);

  const githubOrgData: GitHubUser = await fetch(
    'https://api.github.com/users/meteor-discord',
  )
    .then(res => res.json())
    .catch(() => null);

  return (
    <>
      <div className='bg-grid mx-auto flex min-h-screen flex-col items-center justify-center gap-6 px-4 sm:px-8 md:flex-row md:px-12 xl:px-20'>
        <div className='mt-32 flex-1 text-center md:mt-0 md:text-left'>
          <h1 className='text-5xl font-semibold'>
            Feenko
            <span className='hidden md:inline'>_</span>
          </h1>
          <p className='mt-3 text-lg text-muted-foreground md:text-xl'>
            Developer, Designer, and Taco Hemingway lover.
            <br />
            Available for work and collaborations.
          </p>

          <div className='mt-5 flex flex-row justify-center gap-2 md:justify-start'>
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
          <Card className='w-full'>
            <a
              href='https://github.com/feenko'
              target='_blank'
              rel='noreferrer'
            >
              <CardHeader>
                <CardDescription>Github Profile_</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex flex-col items-start gap-4'>
                  <Avatar className='h-16 w-16'>
                    <AvatarImage src={githubData.avatar_url} />
                    <AvatarFallback>
                      {githubData.login.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className='font-medium leading-none'>
                      {githubData.name}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      @{githubData.login} • he/him
                    </p>
                  </div>
                </div>

                <div className='mt-4 flex items-center gap-3'>
                  <div className='flex items-center gap-1'>
                    <p className='text-sm font-medium leading-none'>
                      {githubData.followers}
                    </p>
                    <p className='text-sm text-muted-foreground'>Followers</p>
                  </div>

                  <div className='flex items-center gap-1'>
                    <p className='text-sm font-medium leading-none'>
                      {githubData.following}
                    </p>
                    <p className='text-sm text-muted-foreground'>Following</p>
                  </div>

                  <div className='flex items-center gap-1'>
                    <p className='text-sm font-medium leading-none'>
                      {githubData.public_repos}
                    </p>
                    <p className='text-sm text-muted-foreground'>Repos</p>
                  </div>
                </div>
              </CardContent>
            </a>
          </Card>
          <Card className='w-full'>
            <a
              href='https://github.com/meteor-discord'
              target='_blank'
              rel='noreferrer'
            >
              <CardHeader>
                <CardDescription>Github Organization_</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex flex-col items-start gap-4'>
                  <Avatar className='h-16 w-16'>
                    <AvatarImage src={githubOrgData.avatar_url} />
                    <AvatarFallback>
                      {githubOrgData.login.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className='font-medium leading-none'>
                      {githubOrgData.name}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      @{githubOrgData.login}
                    </p>
                  </div>
                </div>

                <div className='mt-4 flex items-center gap-3'>
                  <div className='flex items-center gap-1'>
                    <p className='text-sm font-medium leading-none'>
                      {githubOrgData.followers}
                    </p>
                    <p className='text-sm text-muted-foreground'>Followers</p>
                  </div>

                  <div className='flex items-center gap-1'>
                    <p className='text-sm font-medium leading-none'>
                      {githubOrgData.public_repos}
                    </p>
                    <p className='text-sm text-muted-foreground'>Repos</p>
                  </div>
                </div>

                <p className='mt-4 text-sm text-muted-foreground'>
                  {githubOrgData.bio}
                </p>
              </CardContent>
            </a>
          </Card>
        </div>
      </div>

      <div className='mx-auto my-20 mb-48 md:w-1/2'>
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
                className='mx-6 opacity-40 md:mx-8'
              />
            </a>
          ))}
        </Marquee>
      </div>
    </>
  );
}
