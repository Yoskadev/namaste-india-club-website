/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/hotels', // The default route you want to redirect to
                permanent: true, // Set to true for a permanent redirect (308 status code), false for temporary (307 status code)
            },
        ];
    },
};


export default nextConfig;
