import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimização de imagens — permite domínios externos se necessário
  images: {
    remotePatterns: [
      // EDITÁVEL — adicione domínios de imagens externas aqui, ex:
      // { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Compressão habilitada para melhor performance
  compress: true,
  // Powered-by header removido por segurança
  poweredByHeader: false,
};

export default nextConfig;
