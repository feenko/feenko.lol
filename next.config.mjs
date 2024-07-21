/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.scdn.co",
                port: "",
                pathname: "/image/**",
            },
            {
                protocol: "https",
                hostname: "community.spotify.com",
                port: "",
                pathname: "/t5/image/serverpage/image-id/**",
            },
        ],
    },
};

export default nextConfig;
