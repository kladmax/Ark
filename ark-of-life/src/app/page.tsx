// src/app/page.tsx — повертаємо display-4 і правильні кольори
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
      .catch(() => console.log('API error'));
  }, []);

  if (!data) return null;

  return (
    <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
      <div className="container text-center">

        {/* Назва — X-Files стиль, display-4, правильні кольори */}
<h1 className={`x-files-title display-4 fw-bold mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>
  {data.title}
</h1>

        <p className="lead mb-4">
          {isDark ? 'Zombies are coming...' : 'The Ark awaits...'}
        </p>

        <div className="d-flex justify-content-center mb-4">
          <ApocalypseTimer />
        </div>

        <ThemeToggleButton />

        <div className="my-5">
          <WorldClock />
        </div>

        {/* Дисклеймер — без рамки, просто текст */}
        <div className="mx-auto bg-transparent border-0 p-0">
          {isDark ? (
            <>
              <p className="mb-2 text-white">
                <strong>The Prophecy:</strong> Aliens warned Philip Barnett in 2007: <em>"Zombies will rise on 11.11.2026."</em>
              </p>
              <p className="mb-0">
                <Link href="/details" className="text-danger text-decoration-underline">
                  → Watch the full interrogation
                </Link>
              </p>
            </>
          ) : (
            <>
              <p className="mb-2 text-dark">
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
  );
}