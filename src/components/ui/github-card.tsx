import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Card, CardContent, CardDescription, CardHeader } from './card';

import { GithubUser } from '~/lib/types';
import React from 'react';
import { cn } from '~/lib/utils';

export interface GithubCardProps extends React.HTMLAttributes<HTMLDivElement> {
  githubData: GithubUser;
  title?: string;
  type?: 'user' | 'org';
}

const GithubCard = React.forwardRef<HTMLDivElement, GithubCardProps>(
  ({ githubData, title, type = 'user', ...props }, ref) => {
    return (
      <Card className='w-full' ref={ref} {...props}>
        <a href={githubData.html_url} target='_blank' rel='noreferrer'>
          {title && (
            <CardHeader>
              <CardDescription>{title}</CardDescription>
            </CardHeader>
          )}
          <CardContent>
            <div className='flex flex-col items-start gap-4'>
              <Avatar className='h-16 w-16'>
                <AvatarImage src={githubData.avatar_url} />
                <AvatarFallback>
                  {githubData.login.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className='font-medium leading-none'>{githubData.name}</p>
                <p className='text-sm text-muted-foreground'>
                  @{githubData.login}
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

              {type === 'user' && (
                <div className='flex items-center gap-1'>
                  <p className='text-sm font-medium leading-none'>
                    {githubData.following}
                  </p>
                  <p className='text-sm text-muted-foreground'>Following</p>
                </div>
              )}

              <div className='flex items-center gap-1'>
                <p className='text-sm font-medium leading-none'>
                  {githubData.public_repos}
                </p>
                <p className='text-sm text-muted-foreground'>Repos</p>
              </div>
            </div>

            <p
              className={cn(
                'mt-4 text-sm text-muted-foreground',
                !githubData.bio && 'italic',
              )}
            >
              {githubData.bio || 'No bio'}
            </p>
          </CardContent>
        </a>
      </Card>
    );
  },
);
GithubCard.displayName = 'GithubCard';

export { GithubCard };
