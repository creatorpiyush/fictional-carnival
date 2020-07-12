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
