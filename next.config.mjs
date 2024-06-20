/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/voshod-test",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test.taxivoshod.ru",
        port: "",
        pathname: "/images/cars/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
