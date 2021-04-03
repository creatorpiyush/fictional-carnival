const mongoose = require("mongoose");

const db_url = "mongodb://localhost:27017/dataset_multi";

mongoose.connect(
    db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    (err, info) => {
        if (err) console.log(err);
        else console.log(`DB connected...`);
    }
);

module.exports = {
    User: require("./usertable"),
    UserChannel: require("./userchanneltable"),
    Comment: require("./commentstable"),
    UserContent: require("./userContent"),
};