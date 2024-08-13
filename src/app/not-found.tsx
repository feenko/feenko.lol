import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "404",
    description: "Page not found",
};

const NotFound: React.FC = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen text-center magicpattern">
                <Title gradient>404</Title>

                <p className="text-lg md:text-xl text-neutral-400 mt-2 max-w-md">
                    Oops, we broke it! 404 – Page not found, but at least you
                    found this awesome message.
                </p>

                <div className="mt-4 flex space-x-2">
                    <Link href="/">
                        <Button className="h-full">Go Back Home</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
