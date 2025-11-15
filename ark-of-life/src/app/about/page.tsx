// src/app/about/page.tsx — Доки для новачків: інструкції Lite CMS Studio (виправлено теми)
'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '@/app/ThemeProvider';

export default function About() {
  const { isDark } = useContext(ThemeContext);

  return (
    <main className={`min-vh-100 ${isDark ? 'text-white' : 'text-dark'}`}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 mb-4 text-center">Lite CMS Studio — Documentation</h1>

            <div className="accordion" id="docsAccordion">
              {/* Секція 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    What is Lite CMS Studio?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#docsAccordion">
                  <div className="accordion-body">
                    Lite CMS Studio — headless CMS for freelancers. Build landing pages and blogs with drag-and-drop. Export to MaxStore for sale.
                  </div>
                </div>
              </div>

              {/* Секція 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    How to Use
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#docsAccordion">
                  <div className="accordion-body">
                    1. Choose theme: Zombie or Ark.<br/>
                    2. Edit content via API (<code>/api/content</code>).<br/>
                    3. Export to MaxStore: Click "Publish".<br/>
                    4. Deploy on Vercel: <code>vercel --prod</code>.
                  </div>
                </div>
              </div>

              {/* Секція 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                    Themes
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#docsAccordion">
                  <div className="accordion-body">
                    - Zombie Apocalypse: Dark theme.<br/>
                    - Ark of Salvation: Light theme.<br/>
                    Tech: Next.js. Add your own in <code>/templates</code>.
                  </div>
                </div>
              </div>

              {/* Секція 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                    Installation
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#docsAccordion">
                  <div className="accordion-body">
                    1. Clone: <code>git clone https://github.com/kladmax/Ark.git</code><br/>
                    2. Install: <code>npm install</code><br/>
                    3. Run: <code>npm run dev</code><br/>
                    4. Deploy: <code>vercel --prod</code>.
                  </div>
                </div>
              </div>

              {/* Секція 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                    API
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#docsAccordion">
                  <div className="accordion-body">
                    GET <code>/api/content</code> — JSON {'{title, buttonText}'}.<br/>
                    Themes: <code>/templates/[theme]/config.json</code> — tech, author.
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <Link href="/" className="btn btn-secondary btn-lg">← Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}