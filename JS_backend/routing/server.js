const express = require("express");

const app = express();

const port = process.env.PORT || 4444;

const teacherRoute = require("./routes/teachers");
const studentRoute = require("./routes/students");

app.use("/teachers", teacherRoute);
app.use("/students", studentRoute);

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
