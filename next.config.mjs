/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "lh3.googleusercontent.com" }],
  },
  async redirects() {
    return [
      { source: "/research", destination: "/", permanent: true },
      { source: "/reeserach", destination: "/", permanent: true },
      { source: "/mentorship", destination: "/about", permanent: true },
      { source: "/case-studies/platform-modernization", destination: "/case-studies/retail-platform-rescue", permanent: true },
      { source: "/case-studies/saas-scaling", destination: "/case-studies", permanent: true },
      { source: "/case-studies/gen-ai", destination: "/case-studies", permanent: true },
    ];
  },
};

export default nextConfig;
