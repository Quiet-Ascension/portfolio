const path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), 'server/.env') })

const Contact = require('../models/Contact')
const nodemailer = require('nodemailer')

const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  })
}

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    await Contact.create({ name, email, message })

    const transporter = createTransporter()

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name} via Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Portfolio Contact
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555;">Name</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 10px;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 10px;">${message}</td>
            </tr>
          </table>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `
    })

    res.status(200).json({ success: true, message: 'Message sent successfully' })
  } catch (err) {
    console.error('Contact error:', err.message)
    res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}

module.exports = { sendMessage }