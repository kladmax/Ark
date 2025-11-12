// src/app/api/content/route.ts — API Route: контент для головної сторінки

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    title: 'CMS Hybrid Studio', // ← ТУТ БУЛО "API Content from CMS Hub"
    buttonText: 'Клікни з API',
  });
}