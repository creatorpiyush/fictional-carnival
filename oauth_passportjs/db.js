const mongoose = require("mongoose");

const db_url = `mongodb://localhost:27017/oauth_db`;

module.exports = mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB connected...");
      //   console.log(info);
    }
  }
);

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },

  username: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },
});

mongoose.model("users", userSchema);

module.exports = mongoose.model("users");
