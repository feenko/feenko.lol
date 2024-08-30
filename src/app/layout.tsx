import './globals.css';

import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    template: '%s • feenko.lol portfolio: developer & designer',
    default: 'home • feenko.lol portfolio: developer & designer',
  },
  description: 'Software Engineer, Designer, and Music Enthusiast',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'feenko.lol',
    description: 'Software Engineer, Designer, and Music Enthusiast',
    url: 'https://feenko.lol/',
    title: 'feenko.lol',
    images: [
      {
        url: 'https://feenko.lol/hello.png',
        width: 256,
        height: 256,
      },
    ],
  },
};

const Layout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={cn('antialiased', GeistSans.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default Layout;
