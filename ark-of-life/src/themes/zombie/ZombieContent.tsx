'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '@/app/ThemeProvider';
import ApocalypseTimer from '@/components/ApocalypseTimer';
import ThemeToggleButton from '@/components/ThemeToggleButton';

export default function ZombieContent() {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <h1 className="display-3 fw-bold mb-4 animate__animated animate__pulse text-danger">
        Zombie Apocalypse
      </h1>
      <p className="lead mb-4 text-white">
        Zombies are coming. The apocalypse is near. Prepare or perish.
      </p>
      <p className="fs-3 mb-3 fw-bold text-white">Time to Zombie Apocalypse:</p>
      <div className="d-flex justify-content-center mb-4">
        <ApocalypseTimer />
      </div>
      <ThemeToggleButton />
      <div className="disclaimer-box mx-auto mt-4">
        <p className="mb-2">
          <strong>The Prophecy:</strong> Aliens warned Philip Barnett in 1997: <em>"Zombies will rise on 11.11.2025."</em>
        </p>
        <p className="mb-0">
          <Link href="/details" className="text-danger text-decoration-underline">
            → Watch the full interrogation
          </Link>
        </p>
      </div>
    </>
  );
}