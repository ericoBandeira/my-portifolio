/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Desativa otimização de imagem do Next.js (incompatível com exportação estática)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;