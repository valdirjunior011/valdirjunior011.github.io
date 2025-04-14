/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/webpage" : "",
  // Replace 'webpage' with your repository name
};

export default nextConfig;
