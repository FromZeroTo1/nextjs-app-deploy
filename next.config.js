/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SERVER_URL: process.env.SERVER_URL,
	},
	images: {
		domains: [
			'loremflickr.com',
			'picsum.photos',
			'i.pinimg.com',
			'cloudflare-ipfs.com',
			'localhost'
		]
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination:
					'https://responsible-food-production.up.railway.app/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
