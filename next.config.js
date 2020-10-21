const withSass = require('@zeit/next-sass')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    ...withSass({
			cssModules: false,
    }),
    assetPrefix: isProd ? 'https://cdn.lljy.com' : '',
		//  纯静态可以使用下列方式 简化路由
    // async rewrites() {
    //     return [
    //         // {	source: '/',	destination: '/pc' },
    //         { source: '/news', destination: '/news/index' },
    //         { source: '/news/:id', destination: '/news-detail/:id' },
    //         { source: '/open', destination: '/open/' },
    //         { source: '/products', destination: '/products/' },
    //         { source: '/service', destination: '/service/' },
    //         { source: '/m', destination: '/mobile' },
    //         { source: '/m/news', destination: '/mobile/news/' },
    //         { source: '/m/news/:id', destination: '/mobile/news-detail/:id' },
    //         { source: '/m/open', destination: '/mobile/open/' },
    //         { source: '/m/products', destination: '/mobile/products/' },
    //         { source: '/m/service', destination: '/mobile/service/' },
    //     ]
    // }
}