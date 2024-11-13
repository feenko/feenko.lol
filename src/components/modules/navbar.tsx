'use client';

import { AlignJustify, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '~/lib/utils';
import { Button } from '../ui/button';

export function HamburgerIcon({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className='text-white transition-transform duration-100 focus:outline-none active:scale-[0.90]'
    >
      <AlignJustify className='-mb-1 h-5 w-5' />
    </button>
  );
}

export function NavbarLink({
  href,
  children,
  external,
  disabled,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  disabled?: boolean;
}) {
  const styles = cn(
    'mt-4 block lg:mt-0 lg:inline-block',
    'transition-opacity duration-100 hover:opacity-80',
    'underline underline-offset-4',
    disabled && 'cursor-not-allowed opacity-50 hover:opacity-50',
  );

  if (disabled) {
    return <span className={styles}>{children}</span>;
  }

  if (external) {
    return (
      <a
        href={href}
        className={cn(styles, 'flex items-center')}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
        <ArrowUpRight className='-mt-0.5 inline-block h-3.5 w-3.5' />
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed z-50 flex w-full flex-wrap items-center justify-between border-b border-border bg-background px-6 py-4 lg:px-36'>
      <Link href='/' className='flex items-center font-medium'>
        Feenko_
      </Link>

      <div className='block lg:hidden'>
        <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div
        className={cn(
          'w-full flex-grow lg:flex lg:w-auto lg:items-center',
          isOpen ? 'block' : 'hidden',
        )}
      >
        <div className='text-sm lg:flex lg:flex-grow lg:justify-center lg:space-x-4'>
          <NavbarLink href='/showcase' disabled>
            Projects
          </NavbarLink>
          <NavbarLink href='/blog' disabled>
            Blog
          </NavbarLink>
          <NavbarLink href='https://github.com/feenko' external>
            Github
          </NavbarLink>
        </div>
        <div className='mt-4 flex items-center space-x-2 lg:mt-0'>
          <Button asChild>
            <a href='mailto:hi@feenko.lol'>mail@me</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
