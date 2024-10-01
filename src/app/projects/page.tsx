import { Book, GithubLogo } from '@phosphor-icons/react/dist/ssr';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Metadata } from 'next';
import { Title } from '@/components/ui/title';
import { projects } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'projects',
  description: 'My work, projects, and contributions',
};

const Project: React.FC<{
  title: string;
  description: string;
  image: string;
  imageBlurData?: string;
  url: string;
  tags: string[];
}> = ({ title, description, image, imageBlurData, url, tags }) => (
  <a
    href={url}
    target={url === '#' ? undefined : '_blank'}
    rel={url === '#' ? undefined : 'noreferrer'}
    className="block rounded-xl overflow-hidden bg-black border border-neutral-600/60 hover:opacity-90 transition-opacity duration-200 h-full"
  >
    <Image
      src={image}
      alt={title}
      width={1000}
      height={1000}
      className="w-full h-52 object-cover"
      placeholder={imageBlurData ? 'blur' : undefined}
      blurDataURL={imageBlurData}
    />

    <div className="p-4 py-5">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-neutral-400 mt-1">{description}</p>

      <div className="flex flex-wrap mt-2.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-black text-white border border-neutral-600/60 rounded-lg px-2 py-1 text-sm mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const Projects: React.FC = () => (
  <>
    <section className="flex flex-col items-center text-center pt-40 pb-16">
      <Title gradient>
        My Work, Projects, <br />
        and Contributions
      </Title>

      <a
        href="https://github.com/feenko/"
        target="_blank"
        rel="noreferrer"
        className="mt-5"
      >
        <Button variant="secondary" className="flex items-center">
          <GithubLogo className="h-4 w-4" weight="fill" />
          <span className="ml-1">GitHub Profile</span>
        </Button>
      </a>

      <p className="text-neutral-400 mt-1.5 text-sm">
        {projects.length} projects in total
      </p>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-44 px-4 pb-28">
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </section>
  </>
);

export default Projects;
