const express = require("express");

const app = express();

const port = process.env.PORT || 4444;

/*
*
* app.get('/' , (req,res)=>{
*   res -> used to send response
*   req -> used to receive/check requests
*
}) */

app.get("/", (req, res) => {
  res.send("Good Morning");
});

app.get("/greetquery", (req, res) => {
  let person = "Guest";
  // if (req.person) person = req.person; // ! returns Guest only as we are not using query

  // todo: using query
  if (req.query.person) person = req.query.person;
  res.send(`Good Morning <b>${person}</b><br>
            <a href="/form">
                <input type="button" value="Return back" />
            </a>
  `);
});

app.get("/:city/welcome", (req, res) => {
  res.send(`Welcome to <b>` + req.params.city + `</b>`);
});

app.get("/:state/:greet", (req, res) => {
  res.send(req.params.greet + ` to <b>` + req.params.state + `</b>`);
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
