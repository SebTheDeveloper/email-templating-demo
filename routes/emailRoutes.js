const express = require('express');
const router = express.Router();
const nmhbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const selectEmail = require('../src/js/selectEmailController');
const initAuth = require('../src/js/auth');
const auth = initAuth();

router.get('/', auth.checkAuthenticated, (req, res) => {
  res.render('main', {
    layout: false,
    status: 'Nothing sent yet',
    color: 'orange'
  });
});

router.get('/preview', auth.checkAuthenticated, (req, res) => {
  const name = req.query.name;
  const selectedEmail = req.query.selectedEmail;
  const email = req.query.recipient;
  const generatedEmail = selectEmail(name, email, selectedEmail);

  res.send(generatedEmail.output);
});

router.post('/send', auth.checkAuthenticated, (req, res) => {
  const name = req.body.name.trim();
  const selectedEmails = req.body.select_emails;
  const email = req.body.recipient.trim();

  const generatedEmail = selectEmail(name, email, selectedEmails);
  let output = generatedEmail.output;
  let emailSubject = generatedEmail.emailSubject;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST_SMTP,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  transporter.use('compile', nmhbs({
    viewEngine: 'express-handlebars',
    viewPath: './views'
  }));
  
  // send mail with defined transport object
  const info = transporter.sendMail({
    from: `"${process.env.CURR_USER} | Dougherty Brothers Moving" <${process.env.EMAIL_USER}>`,
    to: req.body.recipient, // list of receivers
    bcc: `${process.env.CURR_USER}@doughertybrothersmoving.com`,
    subject: emailSubject,
    html: output
  });

  res.redirect('/email/email-success');

  console.log(`"${generatedEmail.emailSubject}" was sent to ${name} at ${email} on ${new Date().toLocaleString()} EST`);

});

router.get('/email-success', auth.checkAuthenticated,  (req, res) => {
  res.render('main', {
    layout: false,
    status: 'Your email was sent successfully',
    color: 'green'
  });
});

router.get('/send-multiple', auth.checkAuthenticated, (req, res) => {
  res.render('sendMultiple', { 
    layout: false,
    color: 'orange'
  });
});

router.post('/send-multiple', auth.checkAuthenticated, (req, res) => {
  const recipients = JSON.stringify(req.body.recipients);
  res.send(recipients[0])
});

router.get('/viewed-email', (req, res) => {
  let ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;

  const output = `
    <h2>Your email to ${req.query.name} has been read.</h2>
    <p>Customer's Email: ${req.query.email}</p>
    <p>Sent Email: ${req.query.selectedEmail}</p>
  `;
  console.log(req.header('x-forwarded-for'), req.socket.remoteAddress, req.query.selectedEmail);
  res.status(404);
  res.end();
});

module.exports = router;