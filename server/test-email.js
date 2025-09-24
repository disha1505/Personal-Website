const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmail() {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    console.log('Testing email configuration...');
    console.log('SMTP Host:', process.env.SMTP_HOST);
    console.log('SMTP Port:', process.env.SMTP_PORT);
    console.log('SMTP User:', process.env.SMTP_USER);
    console.log('SMTP Pass:', process.env.SMTP_PASS ? '***configured***' : 'NOT SET');

    // Test connection
    await transporter.verify();
    console.log('✅ Email configuration is valid!');

    // Send test email
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_TO,
      subject: 'Portfolio Contact Test',
      text: 'This is a test email from your portfolio contact form.'
    });

    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('❌ Email configuration error:', error.message);
    console.log('\nTroubleshooting:');
    console.log('1. Make sure .env file exists in server directory');
    console.log('2. Check if Gmail app password is correct');
    console.log('3. Ensure 2-factor authentication is enabled');
  }
}

testEmail();
