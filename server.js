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
