// src/themes/default/Wrapper.tsx — Світла тема: Ковчег
'use client';

import styles from './theme.module.scss';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.light}>
      {/* Стилі кнопки — сині (спасіння) */}
      <style jsx global>{`
        .theme-action-btn {
          background-color: #007bff !important;
          border-color: #007bff !important;
          color: #fff !important;
          transition: all 0.2s ease;
        }
        .theme-action-btn:hover {
          background-color: #0056b3 !important;
          border-color: #004085 !important;
        }
      `}</style>

      <div className="container mx-auto p-6 md:p-10">
        {children}
      </div>
    </div>
  );
}