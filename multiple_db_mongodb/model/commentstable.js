const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    comment_date_time: {
        type: Date,
        default: Date.now,
        unique: true,
    },
    comment: {
        type: String,
    },
});

const Comments = mongoose.model("comment", commentsSchema);

module.exports = Comments;