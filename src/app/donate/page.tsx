// src/app/donate/page.tsx — Донати: однотонний фон, яскраві кнопки, гумовий
'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../ThemeProvider';

export default function Donate() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-vh-100 py-5 ${isDark ? 'bg-gradient-dark-red' : 'bg-gradient-light-gray'} d-flex align-items-center justify-content-center`}>
      <div className="container text-center">
        <h1 className={`display-3 mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>
          Support Lite CMS Studio
        </h1>

        <p className="lead mb-5">
          Your donation helps build MaxDevStudio. Invest in freelance tools and our ecosystem.
        </p>

        {/* Яскраві кнопки — контраст на hover */}
        <div className="row g-3 justify-content-center mb-5">
          <div className="col-auto">
            <Link href="https://www.patreon.com/user?u=USER_ID" target="_blank" rel="noopener noreferrer" className={`btn ${isDark ? 'btn-danger glow-red' : 'btn-primary glow-blue'} btn-lg px-4 py-3`}>
              $5 / month
            </Link>
          </div>
          <div className="col-auto">
            <Link href="https://www.patreon.com/user?u=USER_ID" target="_blank" rel="noopener noreferrer" className={`btn ${isDark ? 'btn-danger glow-red' : 'btn-primary glow-blue'} btn-lg px-4 py-3`}>
              $10 / month
            </Link>
          </div>
          <div className="col-auto">
            <Link href="https://www.paypal.com/donate?hosted_button_id=BUTTON_ID" target="_blank" rel="noopener noreferrer" className={`btn ${isDark ? 'btn-warning glow-red' : 'btn-success glow-blue'} btn-lg px-4 py-3`}>
              One-time $25
            </Link>
          </div>
          <div className="col-auto">
            <Link href="https://www.paypal.com/donate?hosted_button_id=BUTTON_ID" target="_blank" rel="noopener noreferrer" className={`btn ${isDark ? 'btn-warning glow-red' : 'btn-success glow-blue'} btn-lg px-4 py-3`}>
              One-time $50
            </Link>
          </div>
        </div>

        <p className="text-muted small mb-5">
          Secure payment. 100% to development. Thank you!
        </p>

        <Link href="/" className="btn btn-secondary btn-lg">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}