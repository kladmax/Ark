'use client';

import React, { createContext, useState, type ReactNode, type ComponentType } from 'react';
import dynamic from 'next/dynamic';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

// Статичні dynamic-імпорти — бандлер може їх проаналізувати
const ZombieWrapper = dynamic(() => import('@/themes/zombie/Wrapper'), { ssr: false }) as ComponentType<{ children?: ReactNode }>;
const ArkWrapper = dynamic(() => import('@/themes/ark/Wrapper'), { ssr: false }) as ComponentType<{ children?: ReactNode }>;

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(prev => !prev);

  const Wrapper = isDark ? ZombieWrapper : ArkWrapper;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Wrapper>{children}</Wrapper>
    </ThemeContext.Provider>
  );
}