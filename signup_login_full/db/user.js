const mongoose = require("mongoose");

const db_url = `mongodb://localhost:27017/user_db`;

mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err, result) => {
    if (err) console.log(err);
    else {
      console.log(`DB connected...`);
      console.log(result);
    }
  }
);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, `Username is required!!`],
    unique: [true, `This Username is taken!!`],
  },
  email: {
    type: String,
    required: [true, `Email is required!!`],
    unique: [true, `Email Already Exists!!`],
  },
  password: {
    type: String,
    required: [true, `Password can't be left Empty!!`],
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.model("Users", userSchema);

module.exports = mongoose.model("Users");
