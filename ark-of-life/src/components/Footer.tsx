// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-maroon text-white py-3 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">© 2025 MaxDevStudio. All rights reserved.</p>
            <p className="mb-0">
              <a href="https://maxdevstudio.github.io/" className="text-white text-decoration-underline">
                maxdevstudio.github.io
              </a>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="/" className="text-white mx-2">Home</a>
            <a href="/about" className="text-white mx-2">About</a>
            <a href="/donate" className="text-white mx-2">Donate</a>
            <a href="/contact" className="text-white mx-2">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}