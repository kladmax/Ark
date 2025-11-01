'use client';

import React, { useState, useEffect, useContext, type ComponentType, type ReactNode } from 'react';
import dynamic from 'next/dynamic';
import styles from './Home.module.scss';
import { ThemeContext } from './ThemeProvider';
import ApocalypseTimer from '@/components/ApocalypseTimer';

interface ApiData { title: string; buttonText: string; }
interface ThemeData { id: number; name: string; price: number; description?: string; }

const localData: ApiData = { title: 'Ark - Apocalypse', buttonText: 'Готуйся' };

// Dynamic імпорти типізуємо як компоненти, що приймають children
const ApocWrapper = dynamic(() => import('@/themes/apocalypse/Wrapper'), { ssr: false }) as ComponentType<{ children?: ReactNode }>;
const DefaultWrapper = dynamic(() => import('@/themes/default/Wrapper'), { ssr: false }) as ComponentType<{ children?: ReactNode }>;

export default function Home() {
  const [data, setData] = useState<ApiData>(localData);
  const [count, setCount] = useState(0);
  const [themes, setThemes] = useState<ThemeData[]>([]);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contentRes = await fetch('/api/content');
        const storeRes = await fetch('/api/store');

        if (!contentRes.ok) throw new Error(`Content API ${contentRes.status}`);
        if (!storeRes.ok) throw new Error(`Store API ${storeRes.status}`);

        const apiData: ApiData = await contentRes.json();
        const storeData: ThemeData[] = await storeRes.json();

        setData(apiData);
        setThemes(storeData);
      } catch (e) {
        console.error('API error:', e);
        setData(localData);
      }
    };
    fetchData();
  }, []);

  const ThemeWrapper = isDark ? ApocWrapper : DefaultWrapper;

  return (
    <ThemeWrapper>
      <main className={`${styles.container} text-center`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">{data.title}</h1>
        <p className="text-2xl mb-4">Час до Апокаліпсиса:</p>
        <div className="mb-8"><ApocalypseTimer /></div>

        <button
          className={`theme-action-btn ${styles.button} mb-4 text-lg px-6 py-3`}
          onClick={() => setCount(c => c + 1)}
        >
          {data.buttonText} ({count})
        </button>

        <br />

        <button className="btn btn-outline-secondary text-sm mt-2" onClick={toggleTheme}>
          {isDark ? 'Світла тема' : 'Темна тема'}
        </button>
      </main>
    </ThemeWrapper>
  );
}