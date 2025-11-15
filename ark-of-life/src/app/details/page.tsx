// src/app/details/page.tsx — Деталі: пророцтва Філіпа Барнета, відео (English)
'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../ThemeProvider';

export default function Details() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="container py-5 min-vh-100">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Заголовок — реальні пророцтва */}
          <h1 className={`display-4 mb-4 text-center ${isDark ? 'text-white' : 'text-dark'}`}>
            Prophecies of Pastor Philip Barnett from 2007 to Present
          </h1>

          {/* Текст про мову */}
          <p className="lead text-center mb-5">
            If you don't understand the language, turn on subtitles.
          </p>

          {/* Секція Azov-Mena 1 */}
          <div className="card mb-4">
            <div className="card-header bg-danger text-white">
              <h3 className="mb-0">Azov-Mena 1</h3>
            </div>
            <div className="card-body">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/uGo-8vMh7Aw?start=2866"
                title="Azov-Mena 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
          </div>

          {/* Секція Azov-Mena 2 — додано третє відео */}
          <div className="card mb-4">
            <div className="card-header bg-danger text-white">
              <h3 className="mb-0">Azov-Mena 2</h3>
            </div>
            <div className="card-body">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/lbxXXeIJ_t0"
                title="Azov-Mena 2/1 part"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded mb-3"
              ></iframe>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/TM6cJPaYH40"
                title="Azov-Mena 2/2 part"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded mb-3"
              ></iframe>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/MZMTVfGRRJQ"
                title="Philip Barnett: New Prophecy 'Azov-Mena 2' — War in Ukraine, World War 3, War in Israel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
          </div>

          {/* Секція Azov-Mena 3 */}
          <div className="card mb-4">
            <div className="card-header bg-danger text-white">
              <h3 className="mb-0">Azov-Mena 3</h3>
            </div>
            <div className="card-body">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/f5UKwllCK60"
                title="What Will Happen Soon? Philip Barnett 2022 full version"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded mb-3"
              ></iframe>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/OksxYauTb_w"
                title="What Will Happen Soon. Azov-Mena 1/2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded mb-3"
              ></iframe>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/27_YwTePsHE"
                title="What Will Happen Soon. Philip Barnett. Azov-Mena 2/2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
          </div>

          {/* Секція картина 2012 */}
          <div className="card mb-4">
            <div className="card-header bg-secondary text-white">
              <h3 className="mb-0">Kyiv After Nuclear Bombing (2012)</h3>
            </div>
            <div className="card-body">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/3WFwgxfA5ho"
                title="Kyiv After Nuclear Bombing"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
          </div>

          {/* Дисклеймер 2 з Patreon */}
          <div className="card mb-5">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Additional Materials</h3>
            </div>
            <div className="card-body text-center">
              <p className="lead mb-3">If you want to get more materials confirming these prophecies, you can subscribe to our Patreon.</p>
              <p className="mb-3">
                <Link href="https://www.patreon.com/user?u=USER_ID" className="btn btn-primary btn-lg">
                  Support on Patreon
                </Link>
              </p>
              <p className="text-muted small">Link to our Patreon will be here soon.</p>
              <p className="mb-0">
                <Link href="https://www.youtube.com/channel/INSIDER_CHANNEL" className="text-info">
                  → Insider channel with videos
                </Link>
              </p>
            </div>
          </div>

          {/* Кнопка назад */}
          <div className="text-center">
            <Link href="/" className="btn btn-secondary btn-lg">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}