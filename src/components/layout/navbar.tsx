'use client';

import { ArrowUpRight, HandWaving, List } from '@phosphor-icons/react/dist/ssr';

import { Button } from '../ui/button';
import { Envelope } from '@phosphor-icons/react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface HamburgerIconProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, setIsOpen }) => (
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-white focus:outline-none active:scale-[0.90] transition-transform duration-100"
  >
    <List weight="bold" className="fill-current h-5 w-5 inline-block" />
  </button>
);

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, external }) => {
  const baseStyle =
    'block mt-4 lg:inline-block lg:mt-0 text-white opacity-70 hover:opacity-65';

  return external ? (
    <a
      href={href}
      className={cn(baseStyle, 'flex items-center')}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight className="inline-block h-4 w-4" />
    </a>
  ) : (
    <Link href={href} className={baseStyle}>
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        'bg-black border-b border-neutral-600/60 flex flex-wrap items-center justify-between px-6 py-3.5 lg:px-36 fixed w-full z-50',
      )}
    >
      <Link href="/" className="flex items-center font-medium">
        <HandWaving className="inline-block h-5 w-5 mr-2" weight="fill" />
        Feenko
      </Link>

      <div className="block lg:hidden">
        <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div
        className={cn(
          'w-full flex-grow lg:flex lg:items-center lg:w-auto',
          isOpen ? 'block' : 'hidden',
        )}
      >
        <div className="text-sm lg:flex-grow lg:flex lg:justify-center lg:space-x-4">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/experience">Experience</NavLink>
          <NavLink href="https://github.com/feenko" external>
            Github
          </NavLink>
        </div>
        <div className="flex items-center mt-4 lg:mt-0 space-x-2">
          <a href="mailto:hi@feenko.lol">
            <Button size="sm" className="h-full">
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export { Navbar, NavLink, HamburgerIcon };
