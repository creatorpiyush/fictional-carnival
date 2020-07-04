const route = require("express").Router();

const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");

const User = require("../models/user");
const user = require("../models/user");

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));

route.all("/", (req, res) => {
  return res.json({
    status: true,
    message: `User controller working ...`,
  });
});

// create new user route
route.post(
  "/createnew",
  [
    // check not empty fields
    check("username").not().isEmpty().trim().escape(),
    check("password").not().isEmpty().trim().escape(),
    check("email").isEmail().normalizeEmail(),
  ],
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(422).json({
        status: false,
        message: "Form Validation Error",
        errors: err.array(),
      });
    }

    // todo: hashing the Password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    // User.create(
    //   {
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: hashedPassword,
    //   },
    //   (err, result) => {
    //     if (err) return res.status(500).send("DB Insert Fail...");

    //     return res.send("DataBase Connected...");
    //   }
    // );

    // create new user model
    const temp = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // insert data inti database
    temp.save((err, result) => {
      if (err) return res.status(500).send("Value insert Fail...");

      return res.status(200).send("Value inserted...");
    });
  }
);

// find user document
route.get("/find", (req, res) => {
  User.find((err, result) => {
    if (err) return res.status(500).send("Find Fail...");

    return res.json({
      status: 200,
      message: `Value found`,
      result: result,
    });
  });
});

module.exports = route;
