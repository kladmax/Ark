// src/themes/apocalypse/Wrapper.tsx
'use client';

import styles from './theme.module.scss';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.dark}>
      {/* КНОПКА API — ФІОЛЕТОВА */}
      <style jsx global>{`
        .theme-action-btn {
          background-color: #6f42c1 !important;
          border-color: #6f42c1 !important;
          color: #fff !important;
          transition: all 0.2s ease;
        }
        .theme-action-btn:hover {
          background-color: #5a32a3 !important;
          border-color: #4c2a85 !important;
        }
      `}</style>

      <div className="container mx-auto p-6 md:p-10">
        {children}
      </div>
    </div>
  );
}