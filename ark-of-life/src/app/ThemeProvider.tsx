// src/app/ThemeProvider.tsx — Темна тема (Zombie) за замовчуванням, без перезапису
'use client';

import React, { createContext, useState, useEffect, type ReactNode, type ComponentType } from 'react';
import dynamic from 'next/dynamic';

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

const ZombieWrapper = dynamic(() => import('@/themes/zombie/Wrapper'), { ssr: false }) as ComponentType<{ children?: ReactNode }>;
const ArkWrapper = dynamic(() => import('@/themes/ark/Wrapper'), { ssr: false }) as ComponentType<{ children?: ReactNode }>;

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(true); // Темна за замовчуванням

  // === Завантажуємо з localStorage ТІЛЬКИ якщо існує ===
  useEffect(() => {
    if (typeof window === 'undefined') return;  // SSR — ігноруємо

    try {
      const saved = localStorage.getItem('ark_theme');
      if (saved && saved !== 'dark') {  // Тільки якщо не 'dark' — міняємо на світлу
        setIsDark(saved === 'dark');
      }  // Якщо 'dark' або немає — лишаємо true
    } catch (error) {
      console.warn('Failed to read theme from localStorage', error);
    }
  }, []);  // [] — один раз при монтуванні

  // === Зберігаємо і оновлюємо стилі ===
  useEffect(() => {
    try {
      localStorage.setItem('ark_theme', isDark ? 'dark' : 'light');
    } catch {}

    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');

      const existingStyle = document.getElementById('navbar-footer-theme');
      if (existingStyle) existingStyle.remove();

      const style = document.createElement('style');
      style.id = 'navbar-footer-theme';
      style.textContent = isDark
        ? `
          .navbar, footer {
            background-color: #800000 !important;
            color: #fff !important;
          }
          .navbar .nav-link { color: #fff !important; }
          .navbar .nav-link:hover { color: #ff6666 !important; }
        `
        : `
          .navbar, footer {
            background-color: #343a40 !important;
            color: #fff !important;
          }
          .navbar .nav-link { color: #fff !important; }
          .navbar .nav-link:hover { color: #adb5bd !important; }
        `;
      document.head.appendChild(style);
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);
  const Wrapper = isDark ? ZombieWrapper : ArkWrapper;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Wrapper>{children}</Wrapper>
    </ThemeContext.Provider>
  );
}