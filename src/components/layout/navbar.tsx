"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/button";
import { ArrowUpRight, HandWaving } from "@phosphor-icons/react/dist/ssr";

interface HamburgerIconProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, setIsOpen }) => (
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
);

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    external?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, external }) => {
    const baseStyle =
        "block mt-4 lg:inline-block lg:mt-0 text-white opacity-70 hover:opacity-65";

    return external ? (
        <a
            href={href}
            className={cn(baseStyle, "flex items-center")}
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
                // Common styles
                "bg-black border-b border-neutral-600/60",
                "flex flex-wrap items-center justify-between",
                "px-6 py-3.5 lg:px-36",
                // Sticking to the top
                "fixed w-full z-50"
            )}
        >
            <Link href="/" className="flex items-center font-medium">
                <HandWaving
                    className="inline-block h-5 w-5 mr-2"
                    weight="fill"
                />
                Feenko
            </Link>

            <div className="block lg:hidden">
                <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            <div
                className={cn(
                    "w-full flex-grow lg:flex lg:items-center lg:w-auto",
                    isOpen ? "block" : "hidden"
                )}
            >
                <div className="text-sm lg:flex-grow lg:flex lg:justify-center lg:space-x-4">
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/experience">Experience</NavLink>
                    <NavLink href="https://github.com/feenko" external>
                        Github
                    </NavLink>
                </div>
                <div className="flex mt-4 lg:mt-0 space-x-2">
                    <a href="mailto:hi@feenko.lol">
                        <Button size="sm">Contact Me</Button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
