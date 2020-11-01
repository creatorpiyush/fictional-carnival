const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");

const key = require("../keys/keys");

const port = process.env.PORT || 5555;

const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: key.SENDGRID.SENDGRID_API_KEY,
  })
);

function sendConfirmationEmail(user) {
  const url = `http://localhost:${port}/confirmation/${user._id}`;
  console.log(url);
  transport
    .sendMail({
      from: "piyushanand.1221@gmail.com",
      to: `${user.username} < ${user.email}>`,
      subject: "Confirmation Email",
      html: `<h1>Confirmation Email!</h1>
        <a href=${url}> ${url}</a>
    `,
    })
    .then(() => {
      console.log("Email sent");
    })
    .catch((err) => {
      console.log("Email not sent", err);
    });
}

module.exports = { sendConfirmationEmail };
