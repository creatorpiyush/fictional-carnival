const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userContentSchema = new Schema({
    content_url: {
        type: String,
        unique: true,
    },
    content_title: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "comment",
    }, ],
});

const UserContents = mongoose.model("userContent", userContentSchema);

module.exports = UserContents;