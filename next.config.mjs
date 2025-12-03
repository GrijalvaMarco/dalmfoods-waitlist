/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si tu sitio estará en un subdirectorio, descomenta y configura:
  // basePath: '/mi-subdirectorio',
};

export default nextConfig;
