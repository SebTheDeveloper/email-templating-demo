const express = require("express");
const router = express.Router();
const selectEmail = require("../controllers/selectEmailController");
const initAuth = require("../utils/auth");
const auth = initAuth();
const nmhbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");

router.get("/", auth.checkAuthenticated, (req, res) => {
  res.render("main", {
    layout: false,
    status: "Nothing sent yet",
    color: "orange",
  });
});

router.get("/preview", auth.checkAuthenticated, (req, res) => {
  const name = req.query.name;
  const selectedEmail = req.query.selectedEmail;
  const email = req.query.recipient;
  const generatedEmail = selectEmail(name, email, selectedEmail);

  res.send(generatedEmail.output);
});

router.post("/send", auth.checkAuthenticated, (req, res) => {
  const name = req.body.name.trim();
  const selectedEmail = req.body.select_email;
  const email = req.body.recipient.trim();

  const generatedEmail = selectEmail(name, email, selectedEmail);
  let output = generatedEmail.output;
  let emailSubject = generatedEmail.emailSubject;

  (async function tempFunc() {
    const transporter = createTransporter();
    await sendEmail(transporter, name, email, emailSubject, output);
    transporter.close();
  })();

  res.redirect("/email/email-success");
});

router.get("/send-multiple", auth.checkAuthenticated, (req, res) => {
  res.render("sendMultiple", {
    layout: false,
    color: "orange",
  });
});

router.post("/send-multiple", auth.checkAuthenticated, (req, res) => {
  const recipients = req.body.recipients;
  const selectedEmail = req.body.selectedEmail;

  (async function tempFunc() {
    const transporter = createTransporter();
    for (const recipient of recipients) {
      const name = recipient.name;
      const email = recipient.email;
      const generatedEmail = selectEmail(name, email, selectedEmail);
      const output = generatedEmail.output;
      const emailSubject = generatedEmail.emailSubject;
      await sendEmail(transporter, name, email, emailSubject, output);
    }
    transporter.close();
  })();

  res.status(200);
});

router.get("/email-success", auth.checkAuthenticated, (req, res) => {
  res.render("main", {
    layout: false,
    status: "Your email was sent successfully",
    color: "green",
  });
});

router.get("/viewed-email", (req, res) => {
  let ipAddress = req.header("x-forwarded-for") || req.socket.remoteAddress;

  const emailContent = `
    <h2>Your email to ${req.query.name} has been read.</h2>
    <p>Customer's Email: ${req.query.email}</p>
    <p>Sent Email: ${req.query.selectedEmail}</p>
  `;
  console.log(
    req.header("x-forwarded-for"),
    req.socket.remoteAddress,
    req.query.selectedEmail
  );
  res.status(404);
  res.end();
});

function createTransporter() {
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
      rejectUnauthorized: false,
    },
    pool: true,
  });

  transporter.use(
    "compile",
    nmhbs({
      viewEngine: "express-handlebars",
      viewPath: "./views",
    })
  );

  return transporter;
}

async function sendEmail(transporter, name, email, emailSubject, output) {
  try {
    await transporter.sendMail({
      from: `"Demo Email from GoodNoodle.xyz" <${process.env.EMAIL_USER}>`,
      to: email, // list of receivers
      bcc: process.env.EMAIL_USER,
      subject: emailSubject,
      html: output,
    });
    console.log(
      `"${emailSubject}" was sent to ${name} at ${email} on ${new Date().toLocaleString()} EST`
    );
  } catch (err) {
    console.log(
      `"FAILED TO SEND ${emailSubject}" to ${name} at ${email} on ${new Date().toLocaleString()} EST. Error: ${err}`
    );
  }
}

module.exports = router;
