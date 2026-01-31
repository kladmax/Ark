// src/app/layout.tsx — додаємо data-theme на body
import type { Metadata } from 'next';
import './globals.scss';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'Lite CMS Studio',
  description: 'Portfolio and donation platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full d-flex flex-column" data-theme="dark"> {/* ← додаємо data-theme */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}