// send-email.js (Node.js example)
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a transporter with your cPanel email settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.blue-elite.tech', // Replace with your cPanel SMTP server
      port: 587,
      auth: {
        user: 'vaiepa462pzj',
        pass: 'AT5wq4$XAOnR',
      },
    });

    // Prepare the email options
    const mailOptions = {
      from: 'mail-provider@blue-elite.tech',
      to: 'mohbaj2016@gmail.com',
      subject: 'Test1',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
};