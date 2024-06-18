/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'test.taxivoshod.ru',
            port: '',
            pathname: '/images/cars/**',
          },
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
