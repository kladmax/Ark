// src/app/ThemeProvider.tsx — Темна тема (Zombie) за замовчуванням
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

const ZombieWrapper = dynamic(() => import('@/templates/published/zombie/Wrapper'), { ssr: false });
const ArkWrapper = dynamic(() => import('@/templates/published/ark/Wrapper'), { ssr: false });
const BaseWrapper = dynamic(() => import('@/templates/published/base/Wrapper'), { ssr: false });

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const saved = localStorage.getItem('ark_theme');
      if (saved) setIsDark(saved === 'dark');
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('ark_theme', isDark ? 'dark' : 'light');
    } catch {}

    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
      document.body.classList.toggle('dark', isDark);
      document.body.classList.toggle('light', !isDark);

      const styleId = 'navbar-footer-theme';
      const existing = document.getElementById(styleId);
      if (existing) existing.remove();

      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = isDark
        ? `
          .navbar, footer { background-color: #800000 !important; color: #fff !important; }
          .navbar .nav-link { color: #fff !important; }
          .navbar .nav-link:hover { color: #ff6666 !important; }
        `
        : `
          .navbar, footer { background-color: #343a40 !important; color: #fff !important; }
          .navbar .nav-link { color: #fff !important; }
          .navbar .nav-link:hover { color: #adb5bd !important; }
        `;
      document.head.appendChild(style);
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  // За замовчуванням — zombie (темна)
  const Wrapper = isDark ? ZombieWrapper : ArkWrapper; // або BaseWrapper для чистого вигляду

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Wrapper>{children}</Wrapper>
    </ThemeContext.Provider>
  );
}