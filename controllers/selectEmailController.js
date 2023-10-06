function selectEmail(name, email, selectedEmails) {
  const emailObj = {};

  switch (selectedEmails) {
    case "company-info":
      const companyInfo = require("../email-templates/companyInfo");
      emailObj.output = companyInfo(name, email, selectedEmails);
      emailObj.emailSubject = "Company Information | Demo Version";
      break;
    case "how-to-research":
      const howToResearch = require("../email-templates/howToResearch");
      emailObj.output = howToResearch(name, email, selectedEmails);
      emailObj.emailSubject = "How to Research Your Movers | Demo Version";
      break;
    case "get-a-quote-online":
      const getAQuoteOnline = require("../email-templates/getAQuoteOnline");
      emailObj.output = getAQuoteOnline(name, email, selectedEmails);
      emailObj.emailSubject = "Get a Quote Online | Demo Version";
      break;
    case "checking-in-about-your-move":
      const checkingInAboutYourMove = require("../email-templates/checkingInAboutYourMove");
      emailObj.output = checkingInAboutYourMove(name, email, selectedEmails);
      emailObj.emailSubject = "Checking In About Your Move | Demo Version";
      break;
    case "if-your-movers-dont-show-up":
      const ifYourMoversDontShowUp = require("../email-templates/ifYourMoversDontShowUp");
      emailObj.output = ifYourMoversDontShowUp(name, email, selectedEmails);
      emailObj.emailSubject = "If Your Movers Don't Show Up | Demo Version";
      break;
  }
  return emailObj;
}

module.exports = selectEmail;
