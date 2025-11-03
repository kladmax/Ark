// src/app/ClientLayout.tsx — Client Component: Navbar, Footer, ThemeProvider
'use client';

import ThemeProvider from './ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="flex-grow-1">{children}</main>
      <Footer />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </ThemeProvider>
  );
}