'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '@/app/ThemeProvider';
import ApocalypseTimer from '@/components/ApocalypseTimer';
import ThemeToggleButton from '@/components/ThemeToggleButton';

export default function ArkContent() {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <h1 className="display-3 fw-bold mb-4 animate__animated animate__pulse text-primary">
        Ark of Life
      </h1>
      <p className="lead mb-4 text-dark">
        The Ark of salvation awaits. Build with us for a brighter future.
      </p>
      <p className="fs-3 mb-3 fw-bold text-dark">Time to Salvation:</p>
      <div className="d-flex justify-content-center mb-4">
        <ApocalypseTimer />
      </div>
      <ThemeToggleButton />
      <div className="disclaimer-box mx-auto mt-4" style={{ borderColor: '#00d4aa', background: 'rgba(0,100,0,0.1)' }}>
        <p className="mb-2">
          <strong>The Ark Project:</strong> A digital shelter built on CMS Hybrid Studio.
        </p>
        <p className="mb-0">
          <Link href="/details" className="text-success text-decoration-underline">
            → Learn how to board the Ark
          </Link>
        </p>
      </div>
    </>
  );
}