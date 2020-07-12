const express = require("express");

const app = express();

const session = require("express-session");

const port = process.env.PORT || 4444;

app.use(
  session({
    secret: `Bg,ve:;x3#bFykc+.^dk2E=y`,
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/session_test", (req, res) => {
  if (req.session.count) {
    req.session.count++;
    res.send(`Count: ${req.session.id}`);
  } else {
    req.session.count = 1;
    res.send(`Welcome First Time: ${req.session.id}`);
  }
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
