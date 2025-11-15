// src/app/page.tsx — Головна: без лейблу, таймер в центрі
'use client';

import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from './ThemeProvider';
import ApocalypseTimer from '@/components/ApocalypseTimer';
import ThemeToggleButton from '@/components/ThemeToggleButton';

interface ApiData {
  title: string;
  buttonText: string;
}

const localData: ApiData = {
  title: 'Lite CMS Studio',
  buttonText: 'Prepare',
};

export default function Home() {
  const [data, setData] = useState<ApiData>(localData);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    fetch('/api/content')
      .then(r => r.json())
      .then(setData)
      .catch(() => console.log('API error'));
  }, []);

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

          {/* Таймер — лейбл перенесено в компонент */}
          <div className="d-flex justify-content-center mb-4">
            <ApocalypseTimer />
          </div>

          <ThemeToggleButton />

          <div className="disclaimer-box mx-auto">
            {isDark ? (
              <>
                <p className="mb-2">
                  <strong>The Prophecy:</strong> Philip Barnett in 2007: <em>"Zombies will rise on 11.11.2026."</em>
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
                  <strong>The Ark Project:</strong> A digital shelter built on Lite CMS Studio.
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