// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Ark - CMS Hybrid MVP | MaxDevStudio',
  description: 'Standalone template з hooks для CMS Hub.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}