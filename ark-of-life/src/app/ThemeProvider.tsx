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
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('ark_theme') : null;
      return saved ? saved === 'dark' : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    // debug
    console.log('[ThemeProvider] isDark=', isDark);
    try {
      localStorage.setItem('ark_theme', isDark ? 'dark' : 'light');
    } catch {}
    // ставимо data-атрибут на body — менше конфліктів з іншими класами
    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
      // додатково можна добавити класи, якщо потрібні:
      document.body.classList.toggle('theme-dark', isDark);
      document.body.classList.toggle('theme-light', !isDark);
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