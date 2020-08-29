const mongoose = require("mongoose");
const { stringify } = require("uuid");

const db_url = `mongodb://localhost:27017/url_db`;

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
      console.log(`DB connect Success...`);
      //   console.log(info);
    }
  }
);

const urlschema = mongoose.Schema({
  roomurl: {
    type: String,
    require: true,
    unique: true,
  },

  adminemail: {
    type: String,
    require: true,
  },
  roomname: {
    type: String,
    require: true,
  },
});

mongoose.model("admin", urlschema);
module.exports = mongoose.model("admin");
