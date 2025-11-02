// src/app/layout.tsx — Server Component: metadata + Bootstrap JS
import type { Metadata } from 'next';
import './globals.scss';
// import ClientLayout from './ClientLayout';
import ClientLayout from '@/app/ClientLayout';

export const metadata: Metadata = {
  title: 'Ark - Apocalypse CMS Hybrid',
  description: 'Portfolio and donation platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full overflow-hidden">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}