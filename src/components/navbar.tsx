"use client";

import { ArrowUpRight, HandWaving } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-black px-6 py-3.5 lg:px-36 border-b border-neutral-600/60 fixed w-full z-50">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link href="/" className="font-medium tracking-tight">
                    <HandWaving
                        className="inline-block h-5 w-5 -mt-1 mr-2"
                        weight="fill"
                    />
                    Feenko
                </Link>
            </div>

            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none active:scale-[0.90] transition-transform duration-200"
                >
                    <svg
                        className="fill-current h-6 w-6 inline-block"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5Z"
                        />
                    </svg>
                </button>
            </div>

            <div
                className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
                    isOpen ? "block" : "hidden"
                } lg:block`}
            >
                <div className="text-sm lg:flex-grow lg:flex lg:justify-center">
                    <Link
                        href="/work"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white opacity-70 hover:opacity-65 mx-2"
                    >
                        My Work
                    </Link>
                    <Link
                        href="/experience"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white opacity-70 hover:opacity-65 mx-2"
                    >
                        My Experience
                    </Link>
                    <Link
                        href="https://github.com/feenko"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white opacity-70 hover:opacity-65 mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                        <ArrowUpRight className="inline-block h-3 w-3 -mt-3 opacity-80" />
                    </Link>
                </div>
                <div className="block mt-4 lg:mt-0">
                    <a
                        href="mailto:contact@feenko.lol"
                        className="inline-block text-sm p-2.5 leading-none rounded-md text-black bg-white hover:opacity-85 transition duration-200"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </nav>
    );
}
