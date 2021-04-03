const route = require("express").Router();

const db = require("../model");

route.get("/", (req, res) => {
    res.send("Hi from User");
});

route.post("/", (req, res) => {
    const temp = new db.User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    temp.save((err, result) => {
        if (err) {
            return res.send({ err: err });
        }
        return res.send(result);
    });
});

module.exports = route;