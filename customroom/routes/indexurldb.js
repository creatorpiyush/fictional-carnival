const route = require("express").Router();

const { check, validationResult } = require("express-validator");

const admin = require("../db/db");

// const io = socketio(server);
const { v4: uuidV4 } = require("uuid");

route.get("/", (req, res) => {
  res.render("index");
});

route.post(
  "/api/createroom",
  [
    check("roomname").not().isEmpty(),
    check("adminemail").isEmail().normalizeEmail(),
  ],
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.send("!!! Form Validation Error !!!");
    }

    const id = uuidV4();

    const temp = new admin({
      roomname: req.body.roomname,
      adminemail: req.body.adminemail,
      roomurl: id,
    });
    temp.save((err, result) => {
      if (err) {
        return res.send({ err: err });
      }
      return res.redirect(`/${id}`);
    });
  }
);

route.get("/:room", (req, res) => {
  res.send(req.params.room);
});

//   const temp = new url({
//     url: id,
//   });

//   temp.save((err, result) => {
//     if (err) {
//       return res.send({ err: err });
//     }
//     return res.redirect(`/${id}`);
//   });
// });

module.exports = route;
