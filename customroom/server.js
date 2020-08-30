const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

// const socketio = require("socket.io");

const indexroute = require("./routes/indexurldb");

const port = process.env.PORT || 5555;

// * front-end linking and post handling
app.set("view engine", "hbs");
app.set("views", "./public/components");
app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ urlencoded: true }));
app.use(express.json());

app.use("/", indexroute);

// app.get("/:roomurl", (req, res) => {
//   res.send(`${req.params.roomurl}`);
// });

// console.log(ids);

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
