const mongoose = require("mongoose");
const keys = require("../keys/keys");

const db_url = keys.mongodb.dburl;

mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err, info) => {
    if (err) console.log(err);
    else {
      console.log(`DB connect Success`);
    }
  }
);

const userSchema = mongoose.Schema({
  username: String,
  googleid: String,
  email: String,
  githubid: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
