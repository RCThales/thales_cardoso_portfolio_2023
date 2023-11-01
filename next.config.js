/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-bucket-thalescardoso.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "https://cdn.pixabay.com",
      },
    ],
  },
};

module.exports = nextConfig;
