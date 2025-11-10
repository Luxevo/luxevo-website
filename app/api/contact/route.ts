import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, ContactFormData } from "@/lib/resend";

export async function POST(request: NextRequest) {
  console.log('API route called');
  

  
  try {
    // Check if we're in build mode - if so, just return early
    if (process.env.NODE_ENV === 'production' && !process.env.RESEND_API_KEY) {
      // During build time, just return a placeholder response
      if (process.env.NEXT_PHASE === 'phase-production-build') {
        return NextResponse.json({ error: 'Build time - API not available' }, { status: 503 });
      }
      
      return NextResponse.json(
        { error: 'Email service not configured. Please set RESEND_API_KEY in your environment variables.' },
        { status: 500 }
      );
    }

    // Rest of your code remains the same...
    const body = await request.json();
    
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
      message: sanitize(body.message || ''),
    };

    if (!formData.firstName || !formData.lastName || !formData.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

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