const route = require("express").Router();

const db = require("../model");

route.post("/:content_url", async(req, res) => {
    await db.Comment.create(req.body)
        .then((content) => {
            return db.UserContent.findOneAndUpdate({ content_url: req.params.content_url }, { $push: { comments: content._id } });
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = route;