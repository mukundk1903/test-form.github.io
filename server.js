const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  
  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mukundk712@gmail.com', // replace with your email address
      pass: 'cgpxpwlylgrsjyrm' // replace with your email password
    }
  });
  
  // Set email options
  const mailOptions = {
    from: 'mukundk712@gmail.com', // replace with your email address
    to: 'mukundk2410@gmail.com', // replace with destination email address
    subject: 'New Form Submission',
    html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `
  };
  
  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send('An error occurred while sending your message.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Your message has been sent successfully!');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
