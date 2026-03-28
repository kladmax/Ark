// src/app/base/page.tsx — Демо базової теми (чистий GitHub style)
'use client';

import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/app/ThemeProvider';
import Link from 'next/link';

export default function BaseDemo() {
  const { isDark, setActiveTheme } = useContext(ThemeContext);

  useEffect(() => {
    setActiveTheme('base'); // ← встановлюємо base
  }, [setActiveTheme]);

  return (
    <main className="flex-grow-1 py-5">
      <div className="container text-center">
        <h1 className={`display-4 fw-bold mb-5 ${isDark ? 'text-white' : 'text-dark'}`}>
          Lite CMS Studio — Base Theme
        </h1>

        <p className="lead mb-5">
          Чистий базовий темплейт у стилі GitHub. Ідеальний для документації, портфоліо та старту.
        </p>

        <div className="mt-5">
          <Link href="/" className="btn btn-secondary btn-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}