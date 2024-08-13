import BlurFade from "@/components/ui/blur-fade";
import Title from "@/components/ui/title";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "projects",
    description: "My work, projects, and contributions",
};

interface Project {
    title: string;
    description: string;
    image: string;
    url: string;
    tags: string[];
}

const work: Project[] = [
    {
        title: "Charmer",
        description:
            "A simple, yet powerful discord bot. Very programmable and customizable.",
        image: "/charmer.png",
        url: "https://charmer.feenko.lol/",
        tags: [
            "Python",
            "Discord.py",
            "Tortoise-ORM",
            "PostgreSQL",
            "Pydantic",
        ],
    },
    {
        title: "alienMusic",
        description:
            "A music bot for discord. Originally made by me and @aruuvi, now is not maintained anymore.",
        image: "/alienmusic.png",
        url: "#",
        tags: ["TypeScript", "Bun", "Discord.js", "MongoDB", "Lavalink"],
    },
];

const Projects: React.FC = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center pt-40 pb-16">
                <BlurFade delay={0.17} inView>
                    <Title gradient>My Projects</Title>
                </BlurFade>

                <BlurFade delay={0.17 * 2} inView>
                    <p className="text-lg md:text-xl mt-2 text-neutral-400">
                        My work, projects, and contributions.
                    </p>
                </BlurFade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-44 px-4 pb-28">
                {work.map((project, index) => (
                    <BlurFade key={index} delay={0.17 * (index + 4)} inView>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.title}
                        >
                            <div className="rounded-xl overflow-hidden bg-black border border-neutral-600/60 hover:opacity-90 transition-opacity duration-200">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    blurDataURL={project.image}
                                    placeholder="blur"
                                    width={400}
                                    height={200}
                                    className="w-full h-52 object-cover transform"
                                />
                                <div className="p-4">
                                    <h2 className="text-2xl font-semibold">
                                        {project.title}
                                    </h2>
                                    <p className="text-neutral-400">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap mt-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-black text-white border border-neutral-600/60 rounded-full px-2 py-1 text-sm mr-2 mb-2"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </BlurFade>
                ))}
            </div>
        </>
    );
};

export default Projects;
