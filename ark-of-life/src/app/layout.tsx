// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.scss';
import ThemeProvider from './ThemeProvider';

export const metadata: Metadata = {
  title: 'Ark - Apocalypse Timer',
  description: 'Час до кінця світу.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}