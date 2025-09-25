const nodemailer = require('nodemailer');
const ContactMessage = require('../models/ContactMessage');

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) throw new Error('SMTP configuration missing');
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

async function submitContact(req, res) {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ ok: false, error: 'All fields required' });

    const saved = await ContactMessage.create({
      name,
      email,
      message,
      ip: req.requestIp,
      userAgent: req.headers['user-agent'] || '',
    });

    res.json({ ok: true, id: saved._id });

    try {
      const transporter = getTransporter();
      const from = process.env.SMTP_FROM || 'Portfolio <no-reply@example.com>';
      await transporter.sendMail({
        from,
        to: process.env.CONTACT_TO || process.env.SMTP_USER,
        subject: `Portfolio Contact: ${name}`,
        text: `From: ${name} <${email}>\nIP: ${req.requestIp}\n\n${message}`,
      });
    } catch (mailErr) {
      console.warn('Email send failed', mailErr.message);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Failed to submit contact' });
  }
}

async function listContacts(_req, res) {
  const rows = await ContactMessage.find({}).sort({ createdAt: -1 }).limit(100);
  res.json({ ok: true, rows });
}

module.exports = { submitContact, listContacts };
