import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // experimental: { turbopack: true }, // Вимкнемо, бо invalid, але тестуємо вручну
  sassOptions: {
    includePaths: ['src'],
  },
};

export default nextConfig;