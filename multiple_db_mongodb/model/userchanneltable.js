const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userChannelSchema = new Schema({
    ChannelName: {
        type: String,
        unique: true,
    },
    content: {
        type: Schema.Types.ObjectId,
        ref: "UserContents",
    },
});

const UserChannels = mongoose.model("userChannel", userChannelSchema);

module.exports = UserChannels;