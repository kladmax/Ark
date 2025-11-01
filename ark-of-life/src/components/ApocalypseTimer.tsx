// src/components/ApocalypseTimer.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ApocalypseTimer() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const getNextApocalypse = () => {
      const now = new Date();
      const year = now.getFullYear();
      let apocalypse = new Date(`${year}-11-11T00:00:00`);
      if (now > apocalypse) apocalypse.setFullYear(year + 1);
      if (apocalypse.getFullYear() > 3000) return null;
      return apocalypse;
    };

    const apocalypse = getNextApocalypse();
    if (!apocalypse) {
      setTimeLeft('Апокаліпсис скасовано');
      return;
    }

    const timer = setInterval(() => {
      const diff = apocalypse.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft('АПОКАЛІПСИС!');
        clearInterval(timer);
        return;
      }
      const days = Math.floor(diff / (86400000));
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${days}д ${hours}г ${minutes}х ${seconds}с`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <h1
      className="font-mono font-black tracking-wider drop-shadow-lg"
      style={{
        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
        textShadow: '0 0 20px rgba(255, 51, 51, 0.8)',
      }}
    >
      {timeLeft}
    </h1>
  );
}