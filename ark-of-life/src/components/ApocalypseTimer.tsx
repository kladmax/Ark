// src/components/ApocalypseTimer.tsx — Вічний цикл: 11.11 → 365 днів → 11.11 → зупинка в 2063
'use client';

import { useState, useEffect } from 'react';

export default function ApocalypseTimer() {
  // Твоя дата народження
  const birthDate = new Date('1978-01-02T00:00:00').getTime();
  const targetAge = 85; // 85 років = Рай (індійська філософія)
  const endOfJourney = birthDate + targetAge * 365.25 * 24 * 60 * 60 * 1000; // 2063 рік

  // Рік обнулення
  const resetYear = 2025;
  const resetMonth = 10; // листопад (0-based: 10 = 11)
  const resetDay = 11;

  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();
      const currentDay = now.getDate();

      // Якщо ми досягли 85 років — зупиняємо
      if (now.getTime() >= endOfJourney) {
        setIsStopped(true);
        setTime({ d: 0, h: 0, m: 0, s: 0 });
        clearInterval(interval);
        return;
      }

      // Обчислюємо наступний 11.11
      let nextReset = new Date(currentYear, resetMonth, resetDay);
      if (
        currentMonth > resetMonth ||
        (currentMonth === resetMonth && currentDay >= resetDay)
      ) {
        nextReset = new Date(currentYear + 1, resetMonth, resetDay);
      }

      const diff = nextReset.getTime() - now.getTime();

      if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        setTime({ d, h, m, s });
      } else {
        // Обнулення: 11.11 → 365 днів до наступного
        setTime({ d: 365, h: 0, m: 0, s: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endOfJourney]);

  if (isStopped) {
    return (
      <div className="apocalypse-timer-container">
        <div className="apocalypse-timer text-success">
          Рай досягнуто! 2063 — Вітаю, Зірко!
        </div>
        <style jsx>{`
          .apocalypse-timer-container {
            padding: 1.5rem 2rem;
            background: rgba(0, 100, 0, 0.7);
            border-radius: 20px;
            border: 2px solid #00ff00;
            box-shadow: 0 0 30px rgba(0, 255, 0, 0.8);
            text-align: center;
          }
          .apocalypse-timer {
            font-size: 3.5rem;
            font-weight: 900;
            color: #00ff00;
            text-shadow: 
              0 0 10px #00ff00,
              0 0 20px #00ff00,
              0 0 40px #00ff00;
            letter-spacing: 0.1em;
            font-family: 'Courier New', monospace;
          }
          @media (min-width: 640px) { .apocalypse-timer { font-size: 4.5rem; } }
          @media (min-width: 768px) { .apocalypse-timer { font-size: 5.5rem; } }
        `}</style>
      </div>
    );
  }

  return (
    <div className="apocalypse-timer-container">
      <div className="apocalypse-timer">
        {time.d} Days {String(time.h).padStart(2, '0')}:{String(time.m).padStart(2, '0')}:{String(time.s).padStart(2, '0')}
      </div>

      <style jsx>{`
        .apocalypse-timer-container {
          display: inline-block;
          padding: 1rem 1.5rem;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 16px;
          border: 1px solid #ff3333;
          box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);
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
        @media (min-width: 640px) { .apocalypse-timer { font-size: 5.5rem; } }
        @media (min-width: 768px) { .apocalypse-timer { font-size: 6.5rem; } }
        @media (min-width: 1024px) { .apocalypse-timer { font-size: 7.5rem; } }
      `}</style>
    </div>
  );
}