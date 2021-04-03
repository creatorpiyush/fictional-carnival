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

route.post("/:username/createChannel", async(req, res) => {
    await db.UserChannel.create({
            ChannelName: req.body.ChannelName,
        })
        .then((userchannel) => {
            return db.User.findOneAndUpdate({ username: req.params.username }, { userChannel: userchannel._id });
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        });
});

route.post("/:userChannel/addContent", async(req, res) => {
    await db.UserContent.create({
            content_url: req.body.content_url,
            content_title: req.body.content_title,
        })
        .then((usercontent) => {
            return db.UserChannel.findOneAndUpdate({ ChannelName: req.params.userChannel }, { $push: { content: usercontent._id } });
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        });
});

route.get("/:username", (req, res) => {
    db.User.findOne({ username: req.params.username })
        .populate({
            path: "userChannel",
            populate: {
                path: "content",
                populate: {
                    path: "comments",
                },
            },
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = route;