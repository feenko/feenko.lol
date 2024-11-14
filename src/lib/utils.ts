import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'long',
  });
}

export function estimateReadingTime(
  text: string,
  wordsPerMinute = 238,
): string {
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time > 1 ? `${time} minutes` : `${time} minute`;
}

export const technologies: { name: string; path: string; url: string }[] = [
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

export const repos: { name: string; description: string }[] = [
  {
    name: 'feenko/feenko.lol',
    description:
      'My personal portfolio website showcasing my projects. Built with Next.JS.',
  },
  {
    name: 'meteor-discord/application',
    description:
      'Meteor is an open-source Discord application aiming to revolutionize the landscape with innovative features and seamless user experiences.',
  },
  {
    name: 'meteor-discord/website',
    description:
      'Open-source website for open-source discord application Meteor.',
  },
  {
    name: 'feenko/spotify-3d-keychain',
    description:
      'A beautifully designed and user-friendly 3D model generator for Spotify Keychains',
  },
  {
    name: 'Fractify-Studios/docs',
    description:
      'Documentation website for Fractify Studios, built with Next.JS and Fumadocs',
  },
];
