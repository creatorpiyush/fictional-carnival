const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    userChannel: {
        type: Schema.Types.ObjectId,
        ref: "userChannel",
    },
});

const Users = mongoose.model("user", userSchema);

module.exports = Users;