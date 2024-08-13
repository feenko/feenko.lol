import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const PageReserved: React.FC = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen text-center magicpattern">
                <Title gradient>Nothing here yet</Title>

                <p className="text-lg md:text-xl text-neutral-400 mt-2 max-w-md">
                    This page is reserved for future use. Something cool might
                    appear here in the future.
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

export default PageReserved;
