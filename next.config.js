const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer()({
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        concurrentFeatures: false,
        serverComponents: false,
    },
})
