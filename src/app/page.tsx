'use client';

import {
  ArrowUpRight,
  Clock,
  MapPinSimple,
} from '@phosphor-icons/react/dist/ssr';

import { BlurFade } from '@/components/ui/blur-fade';
import Link from 'next/link';
import { Title } from '@/components/ui/title';

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen magicpattern text-center">
        <BlurFade delay={0.15} inView>
          <Title gradient>@feenko</Title>
        </BlurFade>

        <BlurFade delay={0.15 * 2} inView>
          <p className="text-lg md:text-xl mt-2 text-neutral-400 mx-2">
            Developer, Designer, and Music Enthusiast
          </p>
          <p className="text-lg md:text-xl text-neutral-400 mx-2">
            Available for work and collaborations.
          </p>
        </BlurFade>

        <BlurFade delay={0.15 * 3} inView>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 mt-4">
              <MapPinSimple
                className="h-4 w-4 text-neutral-400"
                weight="fill"
              />
              <span className="text-neutral-400">Poland, Warsaw</span>
            </div>
            <div className="flex items-center space-x-1 mt-4">
              <Clock className="h-4 w-4 text-neutral-400" weight="fill" />
              <span className="text-neutral-400">
                {new Date().toLocaleString('en-US', {
                  timeZone: 'Europe/Warsaw',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}
              </span>
            </div>
          </div>
        </BlurFade>
      </div>
    </>
  );
};

export default Home;
