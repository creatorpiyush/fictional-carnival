const route = require("express").Router();

const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");

const User = require("../models/user");

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

    // insert data int o database
    temp.save((err, result) => {
      if (err) return res.status(500).send("Value insert Fail...");

      return res.status(200).send("Value inserted...");
    });
  }
);

// find user document
route.all("/find", (req, res) => {
  User.find((err, result) => {
    if (err) return res.status(500).send("Find Fail...");

    return res.json({
      status: 200,
      message: `Value found`,
      result: result,
    });
  });
});

// route.all("/find/:username", (req, res) => {
//   User.find({ username: req.params.username }, (err, result) => {
//     if (err) return res.status(500).send("Find Fail...");

//     return res.json({
//       status: 200,
//       message: `Value found`,
//       result: result,
//     });
//   });
// });

route.all("/find/:email", (req, res) => {
  User.find({ email: req.params.email }, { password: 0 }, (err, result) => {
    if (err) return res.status(500).send("Find Fail...");

    return res.json({
      status: 200,
      message: `Value Found`,
      result: result,
    });
  });
});

route.get("/findbyemail", (req, res) => {
  User.find({ email: req.query.email }, { password: 0 }, (err, result) => {
    if (err) return res.status(500).send("Find Fail...");

    return res.json({
      status: 200,
      message: `Value Found`,
      result: result,
    });
  });
});

// update user data
route.put("/update/:email", (req, res) => {
  // if email is provided
  if (req.params.email) {
    User.update(
      { email: req.params.email },
      { password: bcrypt.hashSync(req.body.password, 10) },
      (err, result) => {
        if (err) return res.status(500).send(`value not updated`);

        return res.json({
          status: true,
          message: `DB Update Success...`,
          result: result,
        });
      }
    );
  } else {
    return res.status(400).send("Email not Provided...");
  }
});

// delete data
route.all("/delete/:email", (req, res) => {
  if (req.params.email) {
    User.remove({ email: req.params.email }, (err, result) => {
      if (err) return res.status(500).send("Remove Failed...");

      return res.json({
        status: true,
        message: `Data Removed Success...`,
        result: result,
      });
    });
  } else {
    return res.status(500).send(`Email not provided...`);
  }
});

module.exports = route;
