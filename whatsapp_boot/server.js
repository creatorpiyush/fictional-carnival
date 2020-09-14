const express = require("express");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");

const keys = require("./keys/keys");

const sid = keys.twilio.sid;
const token = keys.twilio.token;

const client = require("twilio")(sid, token);
const messagingresponse = require("twilio").twiml.MessagingResponse;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/req", (req, res) => {
  const twiml = new messagingresponse();
  const msg = twiml.message(req.body.Body);
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(3000);
