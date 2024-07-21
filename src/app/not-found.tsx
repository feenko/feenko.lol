"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";

export default function NotFound() {
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
                    404
                </h1>
                <p className="text-lg md:text-xl mt-2 text-neutral-400">Page not found</p>
            </div>
        </main>
    );
}
