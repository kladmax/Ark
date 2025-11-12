// src/app/page.tsx — Без миготіння, тільки API
'use client';

import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from './ThemeProvider';
import ApocalypseTimer from '@/components/ApocalypseTimer';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import WorldClock from '@/components/WorldClock';

interface ApiData {
  title: string;
  buttonText: string;
}

export default function Home() {
  const [data, setData] = useState<ApiData | null>(null);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    fetch('/api/content')
      .then(r => r.json())
      .then(setData)
      .catch(() => {
        // Якщо API впаде — fallback
        setData({ title: 'CMS Hybrid Studio', buttonText: 'Prepare' });
      });
  }, []);

  // Поки дані не завантажились — лоадер
  if (!data) {
    return (
      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-white">Завантаження CMS...</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <style jsx global>{`
        .bg-maroon { background-color: #800000 !important; }
        .bg-maroon .navbar-nav .nav-link { color: #fff !important; }
        .bg-maroon .navbar-nav .nav-link:hover { color: #ff6666 !important; }
        .disclaimer-box {
          background: rgba(0,0,0,0.5);
          border: 1px solid #ff3333;
          border-radius: 12px;
          padding: 1.5rem;
          margin-top: 2rem;
          color: #fff;
          max-width: 800px;
        }
      `}</style>

      <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-4 animate__animated animate__pulse">
            {data.title}
          </h1>

          <p className="lead mb-4">
            {isDark
              ? 'Zombies are coming. The apocalypse is near. Prepare or perish.'
              : 'The Ark of salvation awaits. Build with us for a brighter future.'}
          </p>

          <p className={`fs-3 mb-3 fw-bold ${isDark ? 'text-white' : 'text-dark'}`}>
            Time to {isDark ? 'Zombie Apocalypse' : 'Salvation'}:
          </p>

          <div className="d-flex justify-content-center mb-4">
            <ApocalypseTimer />
          </div>

          <div className="mb-5">
            <ThemeToggleButton />
          </div>

          <div className="my-5">
            <WorldClock />
          </div>

          <div className="disclaimer-box mx-auto">
            {isDark ? (
              <>
                <p className="mb-2">
                  <strong>The Prophecy:</strong> Aliens warned Philip Barnett in 1997: <em>"Zombies will rise on 11.11.2025."</em>
                </p>
                <p className="mb-0">
                  <Link href="/details" className="text-danger text-decoration-underline">
                    → Watch the full interrogation
                  </Link>
                </p>
              </>
            ) : (
              <>
                <p className="mb-2">
                  <strong>The Ark Project:</strong> A digital shelter built on CMS Hybrid.
                </p>
                <p className="mb-0">
                  <Link href="/details" className="text-info text-decoration-underline">
                    → Learn how to board the Ark
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}