// src/app/page.tsx — Фінальні виправлення: CMS Hybrid, колір тексту, Zombie
'use client';

import { useState, useEffect, useContext } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ThemeContext } from './ThemeProvider';
import ApocalypseTimer from '@/components/ApocalypseTimer';
import ThemeToggleButton from '@/components/ThemeToggleButton';

interface ApiData {
  title: string;
  buttonText: string;
}

const localData: ApiData = {
  title: 'CMS Hybrid', // ← ТУТ БУЛО "API Content from CMS Hub"
  buttonText: 'Prepare',
};

const ThemeWrapper = dynamic(
  () => import('@/themes/apocalypse/Wrapper'),
  { ssr: false }
);

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
    <ThemeWrapper>
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
        .footer-fixed {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }
      `}</style>

      {/* --- NAVBAR --- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-maroon fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Ark</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="/donate">Donate</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- КОНТЕНТ --- */}
      <main className="container text-center d-flex flex-column justify-content-center flex-grow-1 pt-5 pb-5" style={{ minHeight: '100vh' }}>
        <h1 className="display-3 fw-bold mb-4 animate__animated animate__pulse">
          {data.title}
        </h1>

        <p className="lead mb-4">
          {isDark
            ? 'Zombies are coming. The apocalypse is near. Prepare or perish.'
            : 'The Ark of salvation awaits. Build with us for a brighter future.'}
        </p>

        {/* ← КОЛІР ТЕКСТУ ПО ТЕМІ */}
        <p className={`fs-3 mb-3 fw-bold ${isDark ? 'text-white' : 'text-dark'}`}>
          Time to Apocalypse:
        </p>

        <div className="d-flex justify-content-center mb-4">
          <ApocalypseTimer />
        </div>

        <ThemeToggleButton /> {/* ← Zombie (Light) / Ark (Dark) */}

        {/* --- ДИСКЛЕЙМЕР --- */}
        <div className="disclaimer-box mx-auto">
          {isDark ? (
            <>
              <p className="mb-2">
                <strong>The Prophecy:</strong> Aliens warned Philip Barnett in 1997: <em>"Zombies will rise on 11.11.2025."</em> He was laughed at. Now the countdown has begun.
              </p>
              <p className="mb-0">
                <Link href="/details" className="text-danger text-decoration-underline">
                  → Watch the full interrogation on YouTube
                </Link>
              </p>
            </>
          ) : (
            <>
              <p className="mb-2">
                <strong>The Ark Project:</strong> A digital shelter built on CMS Hybrid. Join the survivors. Your code can save humanity.
              </p>
              <p className="mb-0">
                <Link href="/details" className="text-info text-decoration-underline">
                  → Learn how to board the Ark
                </Link>
              </p>
            </>
          )}
        </div>
      </main>

      {/* --- ПІДВАЛ --- */}
      <footer className="bg-maroon text-white py-3 footer-fixed">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">© 2025 MaxDevStudio. All rights reserved.</p>
              <p className="mb-0">
                <a href="https://maxdevstudio.github.io/" className="text-white text-decoration-underline">
                  maxdevstudio.github.io
                </a>
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="/" className="text-white mx-2">Home</a>
              <a href="/portfolio" className="text-white mx-2">Portfolio</a>
              <a href="/donate" className="text-white mx-2">Donate</a>
              <a href="/contact" className="text-white mx-2">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </ThemeWrapper>
  );
}