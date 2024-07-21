"use client";

import {
    ArrowUpRight,
    DiscordLogo,
    GithubLogo,
    LastfmLogo,
    SteamLogo,
    XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    const [data, setData] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(true);
    const [listeningToSpotify, setListeningToSpotify] = useState(false);

    const fetchData = () => {
        fetch("https://api.lanyard.rest/v1/users/1155452926970577008")
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
                setListeningToSpotify(data.data.listening_to_spotify);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main>
            <Navbar />

            <div className="flex flex-col items-center justify-center h-screen magicpattern text-center">
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
                    Software Engineer, Designer, and Music Enthusiast
                </p>
                <p className="text-lg md:text-xl text-neutral-400">
                    Currently working on{" "}
                    <Link
                        href="https://meteors.cc/"
                        className="font-semibold text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        meteors.cc
                        <ArrowUpRight
                            className="inline-block h-3 w-3 -mt-3"
                            weight="bold"
                        />
                    </Link>
                </p>

                <div className="flex mt-8 space-x-2">
                    <div className="tooltip">
                        <GithubLogo
                            className="h-7 w-7 text-white opacity-70 hover:opacity-100 transition-opacity duration-200"
                            weight="fill"
                        />
                        <span className="tooltiptext">@feenko</span>
                    </div>
                    <div className="tooltip">
                        <XLogo
                            className="h-7 w-7 text-white opacity-70 hover:opacity-100 transition-opacity duration-200"
                            weight="fill"
                        />
                        <span className="tooltiptext">@feenekbruh</span>
                    </div>
                    <div className="tooltip">
                        <SteamLogo
                            className="h-7 w-7 text-white opacity-70 hover:opacity-100 transition-opacity duration-200"
                            weight="fill"
                        />
                        <span className="tooltiptext">id/feenko</span>
                    </div>
                    <div className="tooltip">
                        <DiscordLogo
                            className="h-7 w-7 text-white opacity-70 hover:opacity-100 transition-opacity duration-200"
                            weight="fill"
                        />
                        <span className="tooltiptext">@feenko</span>
                    </div>
                    <div className="tooltip">
                        <LastfmLogo
                            className="h-7 w-7 text-white opacity-70 hover:opacity-100 transition-opacity duration-200"
                            weight="fill"
                        />
                        <span className="tooltiptext">@feenko</span>
                    </div>
                </div>

                {loading ? (
                    <div className="mt-8 mx-2 w-80 md:w-96 bg-black border border-neutral-600/60 p-4 rounded-lg hover:opacity-90 transition-opacity duration-200">
                        <div className="animate-pulse flex space-x-4">
                            <div className="h-20 w-20 md:h-[5.5rem] md:w-[5.5rem] bg-neutral-600 rounded-lg"></div>
                            <div className="flex-1 space-y-3 py-1">
                                <div className="h-4 bg-neutral-600 rounded w-3/4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-neutral-600 rounded"></div>
                                    <div className="h-4 bg-neutral-600 rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : listeningToSpotify ? (
                    <a
                        href="https://last.fm/user/feenko"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="mt-8 mx-2 w-80 md:w-96 bg-black border border-neutral-600/60 p-4 rounded-lg hover:opacity-90 transition-opacity duration-200">
                            <div className="flex space-x-4">
                                <Image
                                    src={data.spotify.album_art_url}
                                    alt="spotify cover"
                                    className="h-20 w-20 md:h-[5.5rem] md:w-[5.5rem] rounded-lg"
                                    width={80}
                                    height={80}
                                />
                                <div className="space-y-1.5 py-1">
                                    <div className="font-semibold text-white text-left text-sm md:text-base">
                                        {data.spotify.song.length > 20
                                            ? data.spotify.song.slice(0, 20) + "..."
                                            : data.spotify.song}
                                    </div>
                                    <div className="space-y-0">
                                        <div className="text-neutral-400 text-left text-sm md:text-base">
                                            by{" "}
                                            {data.spotify.artist.length > 18
                                                ? data.spotify.artist.slice(0, 18) + "..."
                                                : data.spotify.artist}
                                        </div>
                                        <div className="text-neutral-400 text-left text-sm md:text-base">
                                            on{" "}
                                            {data.spotify.album.length > 18
                                                ? data.spotify.album.slice(0, 18) + "..."
                                                : data.spotify.album}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ) : (
                    <a
                        href="https://last.fm/user/feenko"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="mt-8 mx-2 w-80 md:w-96 bg-black border border-neutral-600/60 p-4 rounded-lg hover:opacity-90 transition-opacity duration-200">
                            <div className="flex space-x-4">
                                <Image
                                    src="https://community.spotify.com/t5/image/serverpage/image-id/55829iC2AD64ADB887E2A5?v=v2"
                                    alt="spotify cover"
                                    className="h-20 w-20 md:h-[5.5rem] md:w-[5.5rem] rounded-lg"
                                />
                                <div className="space-y-1.5 py-1">
                                    <div className="font-semibold text-white text-left text-sm md:text-base">
                                        Not listening to Spotify
                                    </div>
                                    <div className="space-y-0">
                                        <div className="text-neutral-400 text-left text-sm md:text-base"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                )}
            </div>
        </main>
    );
}
