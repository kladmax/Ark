// src/app/ThemeProvider.tsx — Темна (zombie) за замовчуванням, підтримка base
'use client';

import React, { createContext, useState, useEffect, type ReactNode, type ComponentType } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  activeTheme: 'zombie' | 'ark' | 'base';
  setActiveTheme: (theme: 'zombie' | 'ark' | 'base') => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
  activeTheme: 'base',
  setActiveTheme: () => {},
});

const ZombieWrapper = dynamic(() => import('@/templates/published/zombie/Wrapper'), { ssr: false }) as ComponentType<{ children?: ReactNode }>;
const ArkWrapper = dynamic(() => import('@/templates/published/ark/Wrapper'), { ssr: false }) as ComponentType<{ children?: ReactNode }>;
const BaseWrapper = dynamic(() => import('@/templates/published/base/Wrapper'), { ssr: false }) as ComponentType<{ children?: ReactNode }>;

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState<boolean>(true);
  const [activeTheme, setActiveTheme] = useState<'zombie' | 'ark' | 'base'>('base');

  // Автоматичне визначення теми за URL
  useEffect(() => {
    const path = pathname || '/';

    console.log('Current pathname:', path); // для дебагу — подивись у консолі

    if (path.startsWith('/zombie')) {
      setActiveTheme('zombie');
    } else if (path.startsWith('/ark')) {
      setActiveTheme('ark');
    } else {
      setActiveTheme('base');
    }
  }, [pathname]);

  // Зберігання/завантаження isDark
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedDark = localStorage.getItem('ark_dark');
      if (savedDark !== null) setIsDark(savedDark === 'true');
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('ark_dark', isDark.toString());
    } catch {}

    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
      document.body.classList.toggle('dark', isDark);
      document.body.classList.toggle('light', !isDark);

      // Navbar/Footer стилі
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

  // Вибір Wrapper
  let Wrapper: ComponentType<{ children?: ReactNode }>;
  switch (activeTheme) {
    case 'zombie':
      Wrapper = ZombieWrapper;
      break;
    case 'ark':
      Wrapper = ArkWrapper;
      break;
    case 'base':
      Wrapper = BaseWrapper;
      break;
    default:
      Wrapper = BaseWrapper;
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, activeTheme, setActiveTheme }}>
      <Wrapper>{children}</Wrapper>
    </ThemeContext.Provider>
  );
}