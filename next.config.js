/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        domains: ['hyper.shrinkray.com'],
        unoptimized: true
    }
};

module.exports = nextConfig;
