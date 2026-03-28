// src/app/ClientLayout.tsx — повертаємо Bootstrap
'use client';

import ThemeProvider from './ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 pt-5"> {/* pt-5 — відступ від Navbar */}
          {children}
        </main>
        <Footer />
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </ThemeProvider>
  );
}