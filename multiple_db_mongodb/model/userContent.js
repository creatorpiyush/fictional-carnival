const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userContentSchema = new Schema({
    content_url: {
        type: String,
        unique: true,
    },
    content_title: {
        type: String,
    },
    likes: {
        type: Number,
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: "Comments",
    },
});

const UserContents = mongoose.model("userContent", userContentSchema);

module.exports = UserContents;