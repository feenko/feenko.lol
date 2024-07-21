import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
    title: "feenko.lol",
    description: "Software Engineer, Designer, and Music Enthusiast",
    other: {
        "og:description": "Software Engineer, Designer, and Music Enthusiast",
        "og:url": "https://feenko.lol/",
        "og:title": "feenko.lol",
        "theme-color": "#010101",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={GeistSans.className}>{children}</body>
        </html>
    );
}
