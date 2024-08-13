"use client";

import {
    ArrowUpRight,
    Clock,
    MapPinSimple,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Title from "@/components/ui/title";
import BlurFade from "@/components/ui/blur-fade";

const Home: React.FC = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen magicpattern text-center">
                <BlurFade delay={0.17} inView>
                    <Title gradient>@feenko</Title>
                </BlurFade>

                <BlurFade delay={0.17 * 2} inView>
                    <p className="text-lg md:text-xl mt-2 text-neutral-400">
                        Software Engineer, Designer, and Music Enthusiast
                    </p>
                    <p className="text-lg md:text-xl text-neutral-400">
                        Currently working on{" "}
                        <Link
                            href="https://charmer.feenko.lol/"
                            className="font-semibold text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            charmer.feenko.lol
                            <ArrowUpRight
                                className="inline-block h-3 w-3 -mt-3"
                                weight="bold"
                            />
                        </Link>
                    </p>
                </BlurFade>

                <BlurFade delay={0.17 * 3} inView>
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 mt-4">
                            <MapPinSimple
                                className="h-4 w-4 text-neutral-400"
                                weight="fill"
                            />
                            <span className="text-neutral-400">
                                Poland, Warsaw
                            </span>
                        </div>
                        <div className="flex items-center space-x-1 mt-4">
                            <Clock
                                className="h-4 w-4 text-neutral-400"
                                weight="fill"
                            />
                            <span className="text-neutral-400">
                                {new Date().toLocaleString("en-US", {
                                    timeZone: "Europe/Warsaw",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                })}
                            </span>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </>
    );
}

export default Home;