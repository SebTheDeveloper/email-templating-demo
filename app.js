const express = require('express');
const exphbs = require('express-handlebars');
const nmhbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const flash = require('express-flash');
const session = require('express-session');

const bcrypt = require('bcrypt');
const passport = require('passport');

const users = [
  {
    username: 'seb',
    password: '$2b$10$V9UK59Dcztl/NGJIrlWxMOIOov43Q8piIdxipmzQDG9V9dVblG5h.',
    id: 'myId'
  }
];

const initializePassport = require('./passport-config');
initializePassport(
  passport,
  username => users.find(user => user.username === username),
  id => users.find(user => user.id === id)
);

const port = process.env.PORT || 3000;

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', checkAuthenticated, (req, res) => {
  res.render('main', {
    layout: false,
    status: 'Nothing sent yet',
    color: 'orange'
  });
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login', { layout: false });
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/success', checkAuthenticated,  (req, res) => {
  res.render('main', {
    layout: false,
    status: 'Your email was sent successfully',
    color: 'green'
  });
});

app.post('/send', checkAuthenticated, (req, res) => {
  const name = req.body.name.trim();
  const selectedEmail = req.body.select_email;
  const email = req.body.recipient.trim();

  let output = '';
  let emailSubject = '';

  switch(selectedEmail) {
    case 'company-info':
      const companyInfo = require('./email-templates/companyInfo');
      output = companyInfo(name, email);
      emailSubject = 'Company Information - Dougherty Brothers Moving';
      break;
    case 'how-to-research':
      const howToResearch = require('./email-templates/howToResearch');
      output = howToResearch(name, email);
      emailSubject = 'How to Research Your Movers';
      break;
    case 'get-a-quote-online':
      const getAQuoteOnline = require('./email-templates/getAQuoteOnline');
      output = getAQuoteOnline(name, email);
      emailSubject = 'Get a Quote Online';
      break;
    case 'if-your-movers-dont-show-up':
      const ifYourMoversDontShowUp = require('./email-templates/ifYourMoversDontShowUp');
      output = ifYourMoversDontShowUp(name, email);
      emailSubject = "If Your Movers Don't Show Up";
      break;
  }

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST_SMTP,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
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
    from: `"${process.env.USER} | Dougherty Brothers Moving" <${process.env.EMAIL_USER}>`, // sender address
    to: req.body.recipient, // list of receivers
    bcc: `${process.env.USER}@doughertybrothersmoving.com`,
    subject: emailSubject, // Subject line
    html: output // html body
  });

  res.redirect('success');

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  
  // res.redirect('success');
  // res.end();
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }

  next();
}

app.listen(port, () => console.log(`Server started on port ${port}`));
