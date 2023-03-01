/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
