// src/app/page.tsx — Головна сторінка Lite CMS Studio з WorldClock
'use client';

import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from './ThemeProvider';
import ApocalypseTimer from '@/components/ApocalypseTimer';  // Вічний таймер апокаліпсису
import ThemeToggleButton from '@/components/ThemeToggleButton';  // Кнопка перемикання тем
import WorldClock from '@/components/WorldClock';  // ← Підключено: світовий годинник з зонами

interface ApiData {
  title: string;
  buttonText: string;
}

export default function Home() {
  const [data, setData] = useState<ApiData | null>(null);  // Початковий стан — null для лоадера
  const { isDark } = useContext(ThemeContext);  // Контекст теми для кольорів

  // Завантаження контенту з API (єдиний джерело правди)
  useEffect(() => {
    fetch('/api/content')
      .then(r => r.json())
      .then(setData)
      .catch(() => {
        // Fallback, якщо API впаде — не миготить
        setData({ title: 'Lite CMS Studio', buttonText: 'Prepare' });
      });
  }, []);

  // Лоадер, поки дані не завантажились (без миготіння)
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
      {/* Глобальні стилі (бордовий меню, дисклеймер, без конфліктів) */}
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

      {/* Основний контент — гумовий, по центру */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <div className="container text-center">

          {/* Заголовок — з API */}
          <h1 className="display-3 fw-bold mb-4 animate__animated animate__pulse">
            {data.title}
          </h1>

          {/* Опис залежно від теми */}
          <p className="lead mb-4">
            {isDark
              ? 'Zombies are coming. The apocalypse is near. Prepare or perish.'
              : 'The Ark of salvation awaits. Build with us for a brighter future.'}
          </p>

          {/* Таймер — в центрі */}
          <div className="d-flex justify-content-center mb-4">
            <ApocalypseTimer />
          </div>

          {/* Кнопка перемикання тем */}
          <div className="mb-5">
            <ThemeToggleButton />
          </div>

          {/* НОВИЙ КОМПОНЕНТ: WorldClock — під таймером */}
          <div className="my-5">
            <WorldClock />
          </div>

          {/* Дисклеймер — в рамці */}
          <div className="disclaimer-box mx-auto">
            {isDark ? (
              <>
                <p className="mb-2">
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