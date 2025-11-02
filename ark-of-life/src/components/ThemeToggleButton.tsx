// src/components/ThemeToggleButton.tsx — Ізольована кнопка, без конфліктів
'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/ThemeProvider';

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-button-container">
      <button className="theme-button" onClick={toggleTheme}>
        {isDark ? 'Ark (Light)' : 'Zombie (Dark)'}
      </button>

      <style jsx>{`
        .theme-button-container {
          display: inline-block;
          margin-top: 1.5rem;
        }
        .theme-button {
          padding: 0.6rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #ff3333;
          background: transparent;
          border: 2px solid #ff3333;
          border-radius: 8px;
          box-shadow: 0 0 12px rgba(255, 51, 51, 0.5);
          transition: all 0.3s ease;
          min-width: 180px;
          cursor: pointer;
        }
        .theme-button:hover {
          background: #ff3333;
          color: #fff;
          box-shadow: 0 0 18px rgba(255, 51, 51, 0.8);
        }
      `}</style>
    </div>
  );
}