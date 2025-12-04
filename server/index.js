import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from the root .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
    },
});

// Verify transporter connection
transporter.verify(function (error, success) {
    if (error) {
        console.log('Transporter verification error:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// Contact route
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const mailOptions = {
            from: `"${name}" <${process.env.SENDER_EMAIL}>`, // Sender address (must be authenticated email)
            to: process.env.ADMIN_EMAIL, // Receiver address
            replyTo: email, // Reply to the user's email
            subject: `Contact Form Submission: ${subject}`,
            text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #333; margin-bottom: 5px;">New Contact Message</h2>
            <p style="color: #666; font-size: 14px; margin-top: 0;">You have received a new inquiry from your portfolio website.</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <div style="margin-bottom: 20px;">
            <p style="margin: 8px 0; color: #555;"><strong>Name:</strong> <span style="color: #333;">${name}</span></p>
            <p style="margin: 8px 0; color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
            <p style="margin: 8px 0; color: #555;"><strong>Subject:</strong> <span style="color: #333;">${subject}</span></p>
          </div>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #007bff;">
            <p style="margin: 0; color: #333; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #aaa;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error instanceof Error ? error.message : 'Unknown error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
