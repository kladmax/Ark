import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Приводимо до any, щоб обійти перевірку типів (тільки якщо впевнені)
  experimental: { turbopack: true } as unknown as NextConfig['experimental'],
  sassOptions: {
    includePaths: ['src'],
  },
};

export default nextConfig;
