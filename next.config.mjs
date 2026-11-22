/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/reeserach", destination: "/research", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;

