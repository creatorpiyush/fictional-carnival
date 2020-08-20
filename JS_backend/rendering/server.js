const express = require("express");
const todoRoute = require("./routes/todos");

const app = express();

const port = process.env.PORT || 4444;

app.set("view engine", "hbs"); // * rendering
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todoRoute);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
