// src/app/ClientLayout.tsx — Client Component: ThemeProvider + Bootstrap JS
'use client';

import ThemeProvider from './ThemeProvider';
import Script from 'next/script';
import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}

      {/* Bootstrap JS — тільки на клієнті */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </ThemeProvider>
  );
}