import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, grade, subject, question } = body

    // Validate required fields
    if (!name || !email || !subject || !question) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // For now, we'll use a mailto approach since no email service is configured
    // In production, you would integrate with an email service like SendGrid, AWS SES, etc.
    
    // Return success - the frontend will handle the mailto link
    return NextResponse.json(
      { 
        success: true,
        message: 'Contact form submitted successfully',
        mailto: `mailto:shmoon1078@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          `이름/Name: ${name}\n연락처/Phone: ${phone || 'N/A'}\n이메일/Email: ${email}\n학년/Grade: ${grade || 'N/A'}\n\n문의사항/Question:\n${question}`
        )}`
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
