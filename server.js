const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Set up middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Handle form submissions
app.post('/send-email', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Create a new nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mukundk712@gmail.com',
      pass: 'cgpxpwlylgrsjyrm',
    },
  });

  // Set up the email options
  const mailOptions = {
    from: 'mukundk712@gmail.com',
    to: 'mukundk2410@gmail.com',
    subject: 'New form submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error: Could not send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Success: Email sent');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
