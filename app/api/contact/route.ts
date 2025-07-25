import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, ContactFormData } from '@/lib/resend';

// Simple in-memory rate limiter (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5; // 5 requests per hour
  
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  console.log('API route called');
  
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }
  
  try {
    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found in environment');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    
    // Basic XSS sanitization
    const sanitize = (str: string) => {
      return str
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
    };
    
    const formData: ContactFormData = {
      firstName: sanitize(body.firstName || ''),
      lastName: sanitize(body.lastName || ''),
      email: body.email || '',
      phone: sanitize(body.phone || ''),
      company: sanitize(body.company || ''),
      role: sanitize(body.role || ''),
      size: sanitize(body.size || ''),
      message: sanitize(body.message || ''),
    };

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send emails
    const result = await sendContactEmail(formData);

    if (result.success) {
      return NextResponse.json(
        { message: 'Emails sent successfully' },
        { status: 200 }
      );
    } else {
      console.error('Email sending failed:', result.error);
      return NextResponse.json(
        { error: 'Failed to send emails', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 