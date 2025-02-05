/** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output: "export",
//   reactStrictMode: false,
//   images: {
//     // unoptimized: true,
//     // domains:  ["147.93.102.47"],
//     domains:  ["prismcloudhosting.com"],
//   },
// };
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["prismcloudhosting.com"], // ✅ Only include the main domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prismcloudhosting.com",
        pathname: "/NewEdgeApis/public/images/**", // ✅ Allow images from this path
      },
    ],
  },
};

export default nextConfig;