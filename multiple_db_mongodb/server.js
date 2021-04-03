const express = require("express");
const app = express();

require("./model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/homeRoute"));

app.use("/user", require("./routes/userRoute"));

app.use("/content", require("./routes/contentRoute"));

// adding port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});