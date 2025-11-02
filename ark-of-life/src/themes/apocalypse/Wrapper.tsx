// src/themes/apocalypse/Wrapper.tsx — Темна тема: зомбі-апокаліпсис
'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/ThemeProvider';
import styles from './theme.module.scss';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={isDark ? styles.dark : styles.light}>
      {/* Стилі кнопки — червоні (зомбі) */}
      <style jsx global>{`
        .theme-action-btn {
          background-color: #dc143c !important;
          border-color: #dc143c !important;
          color: #fff !important;
          transition: all 0.2s ease;
        }
        .theme-action-btn:hover {
          background-color: #b3001e !important;
          border-color: #a0001a !important;
        }
      `}</style>

      <div className="container mx-auto p-6 md:p-10">
        {children}
      </div>
    </div>
  );
}