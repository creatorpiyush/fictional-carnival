// init code
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const db = require("./db");
const userController = require("./controllers/userController");

const app = express();
const port = process.env.PORT;

// middleware setup
app.use(morgan("dev"));
app.use(cors());

app.use("/api/user", userController);

// default routes
app.all("/", (req, res) => {
  return res.json({
    status: true,
    message: `Index page working...`,
  });
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
