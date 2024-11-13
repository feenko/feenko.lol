import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Navbar } from '~/components/modules/navbar';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    template: '%s • feenko.lol: developer & designer',
    default: 'home • feenko.lol: developer & designer',
  },
  description:
    'Developer, designer, and Taco Hemingway lover. Available for work and collaborations.',
  openGraph: {
    title: 'feenko.lol: developer & designer',
    description:
      'Developer, designer, and Taco Hemingway lover. Available for work and collaborations.',
    url: 'https://feenko.lol',
    siteName: 'Feenko’s Portfolio',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#010101',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
