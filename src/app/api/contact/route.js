import { NextResponse } from 'next/server';
import emailjs from 'emailjs-com';

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

console.log('Service ID:', serviceID);
console.log('Template ID:', templateID);
console.log('User ID:', userID);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const templateParams = {
      name,
      email,
      message,
    };

    const response = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      userID
    );

    if (response.status === 200) {
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
