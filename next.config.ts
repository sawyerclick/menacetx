import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	redirects: async () => {
		return [
			{
				source: '/',
				destination: 'https://linktr.ee/menace.tx',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
