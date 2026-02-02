// src/components/Footer.tsx — збільшений підвал з посиланням
'use client';

export default function Footer() {
  return (
    <footer className="bg-maroon text-white py-5 mt-auto">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 mb-3">
            <p className="mb-1">© 2025 MaxDevStudio. All rights reserved.</p>
            <a 
              href="https://maxdevstudio.github.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-decoration-underline small"
            >
              maxdevstudio.github.io
            </a>
          </div>

          {/* Тут пізніше додамо соцмережі та лічильники */}
          <div className="col-12">
            <small>Coming soon: Discord • Instagram • YouTube • Facebook</small>
          </div>
        </div>
      </div>
    </footer>
  );
}