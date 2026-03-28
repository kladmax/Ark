// src/components/ApocalypseTimer.tsx — Таймер апокаліпсису: час йде, ширший, циклічний відлік
'use client';

import { useState, useEffect } from 'react';

export default function ApocalypseTimer() {
  // Цільова дата — 11.11.2025, але циклічно (кожні 365 днів)
  const baseTarget = new Date('2025-11-11T00:00:00').getTime();
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      let diff = baseTarget - now;

      // Циклічний відлік: якщо минув — +365 днів (365.25 для високосних)
      if (diff <= 0) {
        diff += 365.25 * 24 * 60 * 60 * 1000;  // Новий цикл
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ d, h, m, s });
    }, 1000);  // Оновлення кожну секунду, без пропусків

    return () => clearInterval(interval);
  }, [baseTarget]);

  return (
    <div className="apocalypse-timer-container">
      {/* Лейбл — перенесено з page.tsx, стилізовано для темної/світлої */}
      <p className="timer-label text-center mb-2 fw-bold">
        Time to Zombie Apocalypse:
      </p>

      {/* Таймер — адаптивний, ширший */}
      <div className="apocalypse-timer text-center">
        {time.d} Days {String(time.h).padStart(2, '0')}:{String(time.m).padStart(2, '0')}:{String(time.s).padStart(2, '0')}
      </div>

      <style jsx>{`
        .apocalypse-timer-container {
          display: inline-block;
          padding: 1.5rem 3rem;  // Збільшено padding для ширини (3rem справа/ліворуч)
          background: rgba(0, 0, 0, 0.4);
          border-radius: 16px;
          border: 1px solid #ff3333;
          box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);
          width: 100%;
          max-width: 900px;  // Збільшено max-width для десктопу
        }
        .timer-label {
          font-size: 1.3rem;
          color: #ff1a1a;
          text-shadow: 0 0 5px #ff0000;
          margin-bottom: 0.5rem;
        }
        .apocalypse-timer {
          font-size: 4.5rem;
          font-weight: 900;
          color: #ff1a1a;
          text-shadow: 
            0 0 5px #ff0000,
            0 0 10px #ff0000,
            0 0 20px #ff0000,
            0 0 30px #ff0000;
          letter-spacing: 0.12em;
          font-family: 'Courier New', monospace;
          line-height: 1.1;
        }
        @media (max-width: 768px) {
          .apocalypse-timer-container { padding: 1rem 1.5rem; max-width: 90vw; }
          .timer-label { font-size: 1.1rem; }
          .apocalypse-timer { font-size: 3.2rem; }
        }
        @media (min-width: 640px) { .apocalypse-timer { font-size: 5.5rem; } }
        @media (min-width: 1024px) { .apocalypse-timer { font-size: 6.5rem; } }
      `}</style>
    </div>
  );
}