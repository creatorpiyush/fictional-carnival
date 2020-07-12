const mongoose = require("mongoose");

const db_url = `mongodb://localhost:27017/social_site_oauth`;

mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err, link) => {
    if (err) console.log(err);
    else {
      console.log(`DB connected...`);
      //   console.log(link);
    }
  }
);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },

  name: {
    type: String,
  },

  phone: {
    type: Number,
  },

  createdon: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.model("users", userSchema);

module.exports = mongoose.model("users");
