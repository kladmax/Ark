// src/templates/published/base/Wrapper.tsx
'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/ThemeProvider';
import styles from './theme.module.scss';

export default function BaseWrapper({ children }: { children: React.ReactNode }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`${isDark ? styles.baseDark : styles.baseLight} min-vh-100 d-flex flex-column`}>
      {children}
    </div>
  );
}