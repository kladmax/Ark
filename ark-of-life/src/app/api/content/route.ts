import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    title: 'CMS Hybrid', // ← ТУТ БУЛО "API Content from CMS Hub"
    buttonText: 'Клікни з API',
  });
}