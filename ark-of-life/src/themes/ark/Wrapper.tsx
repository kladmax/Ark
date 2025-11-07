// src/themes/ark/Wrapper.tsx — Ark: повна висота, без padding
'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/ThemeProvider';
import styles from './theme.module.scss';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`${isDark ? styles.dark : styles.light} min-vh-100 d-flex flex-column`}>
      {children}
    </div>
  );
}