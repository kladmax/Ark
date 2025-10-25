// postcss.config.js
// Конфігурація PostCSS для Tailwind 4 + Next.js 15.5.6 (Turbopack).
// Пояснення: @tailwindcss/postcss — правильний плагін для Tailwind 4. Autoprefixer для кросбраузерності.
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // Оновлено для Tailwind 4.
    autoprefixer: {}, // Кросбраузерність.
  },
};