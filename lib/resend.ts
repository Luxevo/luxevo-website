import { Resend } from 'resend';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

// Don't initialize Resend client at module level - do it in the function instead
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not defined in environment variables');
  }
  
  return new Resend(apiKey);
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Create the Resend client only when the function is called
    const resend = getResendClient();
    
    // Email to you (notification)
    const notificationEmail = await resend.emails.send({
      from: 'contact@luxevotech.com',
      to: 'jostin@luxevotech.com',
      subject: `New Contact Request from ${formData.firstName} ${formData.lastName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #5361ff; margin: 0; font-size: 24px;">Luxévo Inc.</h1>
            <p style="color: #666; margin: 5px 0 0 0;">New Contact Request</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h2>
            <p style="margin: 8px 0; color: #333;"><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p style="margin: 8px 0; color: #333;"><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #5361ff;">${formData.email}</a></p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
            <p style="margin: 0; color: #333; line-height: 1.6;">${formData.message}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 12px; margin: 0;">Sent from Luxévo website contact form</p>
            <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">Luxévo Inc. - Full-Stack Development & Technical Solutions</p>
          </div>
        </div>
      `,
      text: `
Luxévo Inc. - New Contact Request

Contact Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from Luxévo website contact form
Luxévo Inc. - Full-Stack Development & Technical Solutions
      `,
    });

    // Email to client (confirmation)
    const confirmationEmail = await resend.emails.send({
      from: 'contact@luxevotech.com',
      to: formData.email,
      subject: 'Thank you for contacting us - Luxévo Inc.',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #5361ff; margin: 0; font-size: 24px;">Luxévo Inc.</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Thank you for contacting us</p>
          </div>

          <div style="margin-bottom: 25px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Dear ${formData.firstName},</p>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Thank you for your interest in our technical development services. We have received your message and our team will review it.</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">What happens next:</h2>
            <ul style="margin: 0; padding-left: 20px; color: #333;">
              <li style="margin-bottom: 8px;">Our team will review your message</li>
              <li style="margin-bottom: 8px;">We'll contact you within 24 hours</li>
              <li style="margin-bottom: 8px;">We'll discuss your needs and how we can help</li>
            </ul>
          </div>

          <div style="margin-bottom: 25px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">If you have any immediate questions, feel free to reply to this email.</p>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Best regards,<br>The Luxévo Team</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 12px; margin: 0;">Luxévo Inc. - Full-Stack Development & Technical Solutions</p>
          </div>
        </div>
      `,
      text: `
Luxévo Inc. - Thank you for contacting us

Dear ${formData.firstName},

Thank you for your interest in our technical development services. We have received your message and our team will review it.

What happens next:
- Our team will review your message
- We'll contact you within 24 hours
- We'll discuss your needs and how we can help

If you have any immediate questions, feel free to reply to this email.

Best regards,
The Luxévo Team

---
Luxévo Inc. - Full-Stack Development & Technical Solutions
      `,
    });

    return { success: true, notificationEmail, confirmationEmail };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}