// src/app/ThemeProvider.tsx — додано кольори Navbar/Footer
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

// Виправлено: zombie замість apocalypse, ark замість default
const ZombieWrapper = dynamic(() => import('@/themes/zombie/Wrapper'), { ssr: false }) as ComponentType<{ children?: ReactNode }>;
const ArkWrapper = dynamic(() => import('@/themes/ark/Wrapper'), { ssr: false }) as ComponentType<{ children?: ReactNode }>;

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('ark_theme') : null;
      return saved ? saved === 'dark' : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ark_theme', isDark ? 'dark' : 'light');
    } catch {}

    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');

      // === ВИПРАВЛЕННЯ КОЛЬОРІВ NAVBAR/FOOTER ===
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

      return () => {
        document.getElementById('navbar-footer-theme')?.remove();
      };
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