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

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: "reyden.kayn@ooroos.com",
//   from: "piyushanand.1221@gmail.com", // Use the email address or domain you verified above
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// //ES6
// // sgMail.send(msg).then(
// //   () => {},
// //   (error) => {
// //     console.error(error);

// //     if (error.response) {
// //       console.error(error.response.body);
// //     }
// //   }
// // );
// //ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// })();
