/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        concurrentFeatures: false,
        serverComponents: false,
    },
}
