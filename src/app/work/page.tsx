"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";

const work = [
    {
        title: "Meteors.cc Website",
        url: "https://meteors.cc/",
        description: "A website for the Meteors.cc discord application.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Phosphor Icons"],
        image: "/meteors.cc.png",
    },
    {
        title: "Meteors.cc Discord Application",
        url: "https://discord.gg/TKXSh4rSEP",
        description:
            "A discord application for the Meteors.cc project. All-in-one discord application.",
        tags: ["Bun", "TypeScript", "Discord.js", "MongoDB"],
        image: "/meteorbot.png",
    },
    {
        title: "Alienmusic.app Website",
        url: "https://alienmusic.app/",
        description: "A website for the alienMusic discord application.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Phosphor Icons"],
        image: "/alienmusic.app.png",
    },
    {
        title: "Alienmusic.app Discord Application",
        url: "https://discord.gg/9NJsMkVE7R",
        description:
            "A discord application for the alienMusic project. Music application.",
        tags: ["Bun", "TypeScript", "Discord.js", "MongoDB", "Lavalink", "Riffy"],
        image: "/alienbot.png",
    },
    {
        title: "Aruuvi.space Website",
        url: "https://aruuvi.space/",
        description: "A portfolio website for my friend Aruuvi.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/aruuvi.space.png",
    },
    {
        title: "Eturn.app Website",
        url: "https://eturn.app/",
        description:
            "A website for the Eturn discord application. (I do not own the project anymore)",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Phosphor Icons"],
        image: "/eturn.app.png",
    },
];

export default function Work() {
    return (
        <main>
            <Navbar />

            <div className="flex flex-col items-center justify-center text-center pt-40 pb-16">
                <h1
                    className="text-6xl md:text-7xl font-bold mt-4"
                    style={{
                        background:
                            "linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(255,255,255,1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    feenko.lol
                </h1>
                <p className="text-lg md:text-xl mt-2 text-neutral-400">
                    My work, projects, and contributions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-44 px-4 pb-12">
                {work.map((project) => (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project.title}
                        className="rounded-xl overflow-hidden bg-black border border-neutral-600/60 hover:opacity-90 transition-opacity duration-200"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            className="w-full h-52 object-cover transform"
                            width={400}
                            height={200}
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">{project.title}</h2>
                            <p className="text-neutral-400">{project.description}</p>
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
                    </a>
                ))}
            </div>
        </main>
    );
}
