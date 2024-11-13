import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const technologies = [
  {
    name: 'TypeScript',
    path: '/typescript.svg',
    url: 'https://www.typescriptlang.org',
  },
  {
    name: 'Next.JS',
    path: '/nextjs.svg',
    url: 'https://nextjs.org',
  },
  {
    name: 'Vercel',
    path: '/vercel.svg',
    url: 'https://vercel.com',
  },
  {
    name: 'TaliwindCSS',
    path: '/tailwindcss.svg',
    url: 'https://tailwindcss.com',
  },
  {
    name: 'React',
    path: '/react.svg',
    url: 'https://reactjs.org',
  },
  {
    name: 'PostgresQL',
    path: '/postgresql.svg',
    url: 'https://www.postgresql.org',
  },
  {
    name: 'Prisma',
    path: '/prisma.svg',
    url: 'https://www.prisma.io',
  },
  {
    name: 'MongoDB',
    path: '/mongodb.svg',
    url: 'https://www.mongodb.com',
  },
  {
    name: 'Python',
    path: '/python.svg',
    url: 'https://www.python.org',
  },
  {
    name: 'Git',
    path: '/git.svg',
    url: 'https://git-scm.com',
  },
  {
    name: 'GitHub',
    path: '/github.svg',
    url: 'https://github.com',
  },
  {
    name: 'Cloudflare',
    path: '/cloudflare.svg',
    url: 'https://www.cloudflare.com',
  },
  {
    name: 'Docker',
    path: '/docker.svg',
    url: 'https://www.docker.com',
  },
];
