module.exports = {
    siteUrl: 'https://gustavo-dev.vercel.app',
    changefreq: 'daily',
    priority: 0.7,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}
