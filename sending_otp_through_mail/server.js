const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

// body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", function (req, res) {
  res.send("Node.js 2 way authnetication");
});

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "piyushanand.1221@gmail.com",
    pass: "password|| app password",
    // if password not working due to 2-step verification use https://support.google.com/accounts/answer/185833
  },
});

var mailOptions = {
  from: "piyushanand.1221@gmail.com",
  to: "creatorpiyush24@gmail.com",
  subject: "Sending Email using Node.js",
  text: `Hi`,
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Email sent ${info.response}`);
  }
});

//defining port
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`app is live at ${PORT}`);
});
