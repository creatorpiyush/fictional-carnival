const mongoose = require("mongoose");

const db_url = `mongodb://localhost:27017/usertest`;

mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`DB connected...`);
    }
  }
);
