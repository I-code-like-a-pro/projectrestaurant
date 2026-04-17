/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
      remotePatterns: [{
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol:"https",
        hostname:"images.unsplash.com",
        pathname: "/**"
      }
      ],
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  }
};

export default nextConfig;
