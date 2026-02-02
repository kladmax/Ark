// src/app/page.tsx — Вітрина: коротка, з посиланнями на демо темплейтів
'use client';

import Link from 'next/link';
import { ThemeContext } from './ThemeProvider';
import { useContext } from 'react';

export default function Home() {
  const { isDark } = useContext(ThemeContext);

  return (
    <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
      <div className="container text-center">
        <h1 className={`x-files-title display-4 fw-bold mb-5 ${isDark ? 'text-white' : 'text-dark'}`}>
          Lite CMS Studio
        </h1>

        <p className="lead mb-5">
          {isDark
            ? 'Готові до апокаліпсису? Обирай свою тему.'
            : 'Будуй майбутнє з нами. Обирай свою тему.'}
        </p>

        <div className="row g-4 justify-content-center">
          {/* Картка Zombie */}
          <div className="col-md-5">
            <div className="card bg-dark text-white border-danger h-100">
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h3 className="card-title">Zombie Apocalypse</h3>
                <p className="card-text mb-4">Темна тема для драматичних історій</p>
                <Link href="/zombie" className="btn btn-danger btn-lg mt-auto">
                  Переглянути демо →
                </Link>
              </div>
            </div>
          </div>

          {/* Картка Ark */}
          <div className="col-md-5">
            <div className="card bg-light text-dark border-info h-100">
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h3 className="card-title">Ark of Salvation</h3>
                <p className="card-text mb-4">Світла тема для надії та порятунку</p>
                <Link href="/ark" className="btn btn-info btn-lg mt-auto">
                  Переглянути демо →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5">
          <Link href="/donate" className="text-info">
            Підтримати проєкт →
          </Link>
        </p>
      </div>
    </main>
  );
}