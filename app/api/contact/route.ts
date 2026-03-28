import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { studentName, parentName, email, phone, className, messageContent } = await request.json();
    
    // Testing ke liye terminal mein check karein
    console.log("Processing form for:", studentName);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Owner ko enquiry bhejna
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: `New Admission Enquiry: ${studentName}`,
      // Yahan studentName use karein, sirf 'name' nahi
      text: `Student Name: ${studentName}\nParent Name: ${parentName}\nClass: ${className}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${messageContent}`,
    });

    // 2. User ko reply bhejna (Auto-reply)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // User ka email jo form se aaya
      subject: 'Welcome to Sankalp Kids Care Academy',
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #31008e;">Hi ${parentName},</h2>
          <p>Thank you for reaching out to us for <b>${studentName}'s</b> admission.</p>
          <p>Our team will review your enquiry and contact you on <b>${phone}</b> soon.</p>
          <br/>
          <p>Best Regards,<br/>Admission Team<br/>Sankalp Kids Care Academy</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Nodemailer Error:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}