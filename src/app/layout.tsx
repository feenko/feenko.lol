import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
    title: "feenko.lol",
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
