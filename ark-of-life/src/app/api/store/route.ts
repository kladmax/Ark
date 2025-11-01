import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { id: 1, name: 'Default Theme', description: 'Базова тема з Bootstrap', price: 0 },
    { id: 2, name: 'WP Adapted Theme', description: 'Адаптована WP тема з Three.js', price: 20 },
  ]);
}