'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './Home.module.scss';

interface ThemeData {
  id: number;
  name: string;
  price: number;
  description?: string;
}

interface ApiData {
  title: string;
  buttonText: string;
}

const localData: ApiData = {
  title: 'Ark - CMS Hybrid MVP',
  buttonText: 'Клікни для демо',
};

const ThemeWrapper = dynamic(() => import('@/themes/default/Wrapper'), { 
  ssr: false 
});

export default function Home() {
  const [data, setData] = useState<ApiData>(localData);
  const [count, setCount] = useState(0);
  const [themes, setThemes] = useState<ThemeData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_CMS_HUB_API || '/api/content';
        
        // Логуємо URL для дебагу
        console.log('Fetching content from:', apiUrl);
        console.log('Fetching store from: /api/store');
        
        const contentRes = await fetch(apiUrl);
        const storeRes = await fetch('/api/store');

        // Логуємо статуси відповідей
        console.log('Content API status:', contentRes.status);
        console.log('Store API status:', storeRes.status);

        if (!contentRes.ok) {
          throw new Error(`Content API failed with status: ${contentRes.status}`);
        }
        if (!storeRes.ok) {
          throw new Error(`Store API failed with status: ${storeRes.status}`);
        }

        const apiData: ApiData = await contentRes.json();
        const storeData: ThemeData[] = await storeRes.json();

        setData(apiData);
        setThemes(storeData);
      } catch (error) {
        console.error('API error details:', error);
        // Використовуємо локальні дані при помилці
        setData(localData);
        setThemes([
          { id: 1, name: 'Default Theme', description: 'Базова тема', price: 0 }
        ]);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeWrapper>
      <main className={styles.container}>
        <h1 className="display-4">{data.title}</h1>
        <p>Placeholder для лендінгу MaxDevStudio.</p>
        <button
          className={`btn btn-primary ${styles.button}`}
          onClick={() => setCount(count + 1)}
        >
          {data.buttonText} ({count})
        </button>
        <ul>
          {themes.map((theme) => (
            <li key={theme.id}>
              {theme.name} - ${theme.price}
            </li>
          ))}
        </ul>
      </main>
    </ThemeWrapper>
  );
}