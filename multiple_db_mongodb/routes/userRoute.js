const route = require("express").Router();

const bcrypt = require("bcryptjs");

const db = require("../model");

route.get("/", (req, res) => {
    res.send("Hi from User");
});

route.post("/", (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 13);

    const temp = new db.User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });
    temp.save((err, result) => {
        if (err) {
            return res.send({ err: err });
        }
        return res.send(result);
    });
});

route.get("/:username", (req, res) => {
    db.User.findOne({ username: req.params.username })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = route;