const mongoose = require("mongoose");

const db_url = `mongodb://localhost:27017:loginsignup_db`;

// connection created
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
      console.log(`DB connect Sucess...`);
      console.log(info);
    }
  }
);

// userSchema created
const userSchema = mongoose.Schema({
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
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.model("users", userSchema);

module.exports = mongoose.model("users");
