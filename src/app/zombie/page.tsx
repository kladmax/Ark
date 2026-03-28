// src/app/zombie/page.tsx — Демо темплейту Zombie Apocalypse
'use client';

import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/app/ThemeProvider';
import ApocalypseTimer from '@/components/ApocalypseTimer';
import WorldClock from '@/components/WorldClock';
import Link from 'next/link';

export default function ZombieDemo() {
  const { isDark, setActiveTheme } = useContext(ThemeContext);


  return (
    <main className="flex-grow-1 py-5">
      <div className="container text-center">
        <h1 className={`x-files-title display-4 fw-bold mb-5 ${isDark ? 'text-white' : 'text-dark'}`}>
          Zombie Apocalypse
        </h1>

        <p className="lead mb-5">
          Темна тема для драматичних історій. Готовий до апокаліпсису?
        </p>

        <div className="d-flex justify-content-center mb-5">
          <ApocalypseTimer />
        </div>

        <div className="my-5">
          <WorldClock />
        </div>

        <div className="disclaimer-box mx-auto bg-transparent border-0 p-0">
          <p className="mb-2 text-white">
            <strong>The Prophecy:</strong> Aliens warned Philip Barnett in 2007: <em>"Zombies will rise on 11.11.2026."</em>
          </p>
          <p className="mb-0">
            <Link href="/details" className="text-danger text-decoration-underline">
              → Watch the full interrogation
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