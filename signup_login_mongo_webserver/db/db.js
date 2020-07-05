const mongoose = require("mongoose");

const db_url = `mongodb+srv://userdb:userpass@cluster0.jscha.gcp.mongodb.net/login_signup_db?retryWrites=true&w=majority`;

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
