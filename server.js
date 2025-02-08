const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './.env' });

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Load JSON data
const homepageData = require('./data/homepage.json');
const projectsData = require('./data/projects.json');
const contactData = require('./data/contact.json');

// Routes
app.get('/', (req, res) => {
  res.render('homepage', { data: homepageData });
});

app.get('/projects', (req, res) => {
  res.render('projects', { data: projectsData });
});

app.get('/contact', (req, res) => {
  res.render('contact', { data: contactData });
});


// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Handle contact form submission
app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `${name} visited ShowCase!`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
