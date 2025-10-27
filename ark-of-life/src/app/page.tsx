// src/app/page.tsx — Standalone лендінг з dynamic theme і API hook.
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';  // виправлений імпорт
import styles from './Home.module.scss';  // CSS Modules.

// Дефолтні дані для standalone mode.
const localData = {
  title: 'Ark - CMS Hybrid MVP',
  buttonText: 'Клікни для демо',
};

// Dynamic theme component (завантажуємо з /src/themes).
const ThemeWrapper = dynamic(() => import('@/themes/default/Wrapper'), { ssr: false });

export default function Home() {
  const [data, setData] = useState(localData);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_CMS_HUB_API;
    if (apiUrl) {
      // Connected mode: fetch з CMS Hub API.
      fetch(`${apiUrl}/content`)
        .then(res => res.json())
        .then(apiData => setData(apiData))
        .catch(() => console.log('API error, using local data'));
    }
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
      </main>
    </ThemeWrapper>
  );
}