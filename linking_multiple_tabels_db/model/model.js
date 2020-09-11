const mongoose = require("mongoose");
const keys = require("../keys/keys");

const Schema = mongoose.Schema;

const dburl = keys.mongoose.db_url;

mongoose.connect(
  dburl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err, info) => {
    if (err) console.log(err);
    else {
      console.log(`DB connect Sucess...`);
    }
  }
);
