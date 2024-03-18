// Install Nodemailer: npm install nodemailer
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(cors())
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(name,email,subject,message);
  // Configure the nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mahekramdasani@gmail.com', // Replace with your Gmail email
      pass: 'jjxvqejxabkjlrgr', // Replace with your Gmail password or an app-specific password
    },
  });

  // Set up email options
  const mailOptions = {
    from: email, // Replace with your Gmail email
    to: "mahekramdasani@gmail.com", // Replace with the recipient email
    subject: subject,
    text: `Name: ${name}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
