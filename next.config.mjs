/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8000',
            pathname: '/static/**',
          },
        ],
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.seyonacademy.com',
            port: '',
            pathname: '/static/**',
          },
        ],
    },


    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true, // i will change in future (adding valid types)
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
};

export default nextConfig;
