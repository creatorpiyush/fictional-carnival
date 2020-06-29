const express = require("express");

const app = express();

const port = process.env.PORT || 4444;
// ! if we are deploying then we can't specify PORT as it is set through that site only
// * so we use process.env.PORT

// todo: printing content from a html file
app.use("/", express.static("public"));

// * using get method
// app.get("/", (req, res) => {
//   res.send("Hello World !!");
// });

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
