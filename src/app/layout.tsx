import './globals.css';

import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    template: '%s • feenko.lol portfolio: developer & designer from Poland',
    default: 'home • feenko.lol portfolio: developer & designer from Poland',
  },
  description:
    'Hi, I’m Feenko, also known as Szymon, a developer based in Warsaw, Poland. I specialize in Next.js and am looking for new job opportunities. Check out my portfolio to see my work and skills. Let’s connect if you’re interested in collaborating or hiring a developer.',
  openGraph: {
    title: 'feenko.lol portfolio: developer & designer from Poland',
    description: 'Developer, designer, and music enthusiast',
    url: 'https://feenko.lol',
    siteName: 'Feenko’s Portfolio',
    images: [
      {
        url: 'https://feenko.lol/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Feenko’s Portfolio',
      },
    ],
    type: 'website',
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
