const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_ADDRESS,
    clientId: process.env.MAILING_CLIENT_ID,
    clientSecret: process.env.MAILING_CLIENT_SECRET,
    refreshToken: process.env.MAILING_REFRESH,
    accessToken: process.env.MAILING_ACCESS_TOKEN,
  },
});

const sendEmail = (useremail) => {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: useremail,
    subject: "My tutorial brought me here", // Subject
    html: "<p>You have received this email using nodemailer, you are welcome ;)</p>", // html body
  };
  transport.sendMail(mailOptions, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      transport.close();
      console.log("Email Sent working");
    }
  });
};

module.exports = {
  sendEmail,
};
