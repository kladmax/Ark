// src/themes/default/Wrapper.tsx — Дефолтний theme wrapper.
'use client';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', padding: '40px', borderRadius: '10px' }}>
      {children}
    </div>
  );
}