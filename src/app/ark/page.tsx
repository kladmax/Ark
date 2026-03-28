// src/app/ark/page.tsx — Демо темплейту Ark of Salvation
'use client';

import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/app/ThemeProvider';
import WorldClock from '@/components/WorldClock';
import Link from 'next/link';

export default function ArkDemo() {
  const { isDark, setActiveTheme } = useContext(ThemeContext);

 
  return (
    <main className="flex-grow-1 py-5">
      <div className="container text-center">
        <h1 className={`x-files-title display-4 fw-bold mb-5 ${isDark ? 'text-white' : 'text-dark'}`}>
          Ark of Salvation
        </h1>

        <p className="lead mb-5">
          Світла тема для надії та порятунку. Будуй майбутнє з нами.
        </p>

        <div className="my-5">
          <WorldClock />
        </div>

        <div className="disclaimer-box mx-auto bg-transparent border-0 p-0">
          <p className="mb-2 text-dark">
            <strong>The Ark Project:</strong> A digital shelter built on Lite CMS Studio.
          </p>
          <p className="mb-0">
            <Link href="/details" className="text-info text-decoration-underline">
              → Learn how to board the Ark
            </Link>
          </p>
        </div>

        <div className="mt-5">
          <Link href="/" className="btn btn-secondary btn-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}