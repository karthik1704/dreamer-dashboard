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
};

export default nextConfig;
