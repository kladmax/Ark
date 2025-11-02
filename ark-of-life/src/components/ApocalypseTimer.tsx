// src/components/ApocalypseTimer.tsx — Чіткі цифри, м'який неон, ізольований
'use client';

import { useState, useEffect } from 'react';

export default function ApocalypseTimer() {
  const target = new Date('2025-11-11T00:00:00').getTime();
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        setTime({ d, h, m, s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

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
        @media (min-width: 640px) {
          .apocalypse-timer { font-size: 5.5rem; }
        }
        @media (min-width: 768px) {
          .apocalypse-timer { font-size: 6.5rem; }
        }
        @media (min-width: 1024px) {
          .apocalypse-timer { font-size: 7.5rem; }
        }
      `}</style>
    </div>
  );
}