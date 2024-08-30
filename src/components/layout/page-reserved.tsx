import { Button } from '@/components/ui/button';
import { GithubLogo } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { Title } from '@/components/ui/title';

const PageReserved: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center magicpattern">
    <Title gradient>Nothing here yet</Title>

    <p className="text-lg md:text-xl text-neutral-400 mt-2 max-w-md">
      This page is reserved for future use. Something cool might appear here in
      the future.
    </p>

    <div className="mt-4 flex space-x-2">
      <Link href="/">
        <Button className="h-full">Go Back Home</Button>
      </Link>

      <a
        href="https://github.com/feenko/feenko.lol/tree/main/src/components/layout/page-reserved.tsx"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="h-full" variant="secondary">
          <GithubLogo className="h-4 w-4 inline-block" weight="fill" />
          <span className="ml-1">View Source</span>
        </Button>
      </a>
    </div>
  </div>
);

export { PageReserved };
