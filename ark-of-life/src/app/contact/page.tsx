// src/app/contact/page.tsx — Контакти: форма email, однотонний фон, теми (як /donate)
'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../ThemeProvider';

export default function Contact() {
  const { isDark } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`min-vh-100 py-5 d-flex align-items-center justify-content-center ${isDark ? 'bg-gradient-dark-red' : 'bg-gradient-light-gray'}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className={`display-4 mb-4 text-center ${isDark ? 'text-white' : 'text-dark'}`}>
              Contact Us
            </h1>

            <p className={`lead text-center mb-5 ${isDark ? 'text-white opacity-75' : 'text-dark opacity-75'}`}>
              Have questions? Let's build together. Send a message to MaxDevStudio.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-transparent">
                <div className="mb-3">
                  <label htmlFor="name" className={`form-label ${isDark ? 'text-white' : 'text-dark'}`}>Name</label>
                  <input
                    type="text"
                    className={`form-control ${isDark ? 'bg-dark border-secondary text-white' : 'bg-light border-dark text-dark'}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className={`form-label ${isDark ? 'text-white' : 'text-dark'}`}>Email</label>
                  <input
                    type="email"
                    className={`form-control ${isDark ? 'bg-dark border-secondary text-white' : 'bg-light border-dark text-dark'}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className={`form-label ${isDark ? 'text-white' : 'text-dark'}`}>Message</label>
                  <textarea
                    className={`form-control ${isDark ? 'bg-dark border-secondary text-white' : 'bg-light border-dark text-dark'}`}
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className={`btn btn-lg w-100 ${isDark ? 'btn-danger' : 'btn-primary'}`}>
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="alert alert-success d-inline-block" role="alert">
                  Message sent! We'll reply soon.
                </div>
                <div className="mt-4">
                  <Link href="/" className="btn btn-secondary btn-lg">
                    ← Back to Home
                  </Link>
                </div>
              </div>
            )}

            {!submitted && (
              <div className="text-center mt-5">
                <Link href="/" className="btn btn-outline-secondary btn-lg">
                  ← Back to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}