// src/app/layout.tsx — Server Component: metadata + children
import type { Metadata } from 'next';
import './globals.scss';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'CMS Hybrid Studio',
  description: 'Portfolio and donation platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full d-flex flex-column">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}