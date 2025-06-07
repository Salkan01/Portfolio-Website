const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
app.use(express.json());

const smsClient = twilio(process.env.TWILIO_ACCOUNT_SID || '', process.env.TWILIO_AUTH_TOKEN || '');

app.post('/api/start-chat', async (req, res) => {
  try {
    await smsClient.messages.create({
      body: 'New visitor started a chat on your portfolio.',
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.PERSONAL_PHONE_NUMBER,
    });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to send SMS');
  }
});

app.post('/api/send-email', async (req, res) => {
  const { name, email } = req.body;
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `\"Portfolio Bot\" <${process.env.EMAIL_USER}>`,
      to: 'salahkanaya2001@gmail.com',
      subject: 'New help request',
      text: `Name: ${name}\nEmail: ${email}`,
    });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to send email');
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server running on port', PORT));
