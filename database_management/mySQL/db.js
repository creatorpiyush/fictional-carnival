const mysql = require("mysql2");

const connection = mysql.createConnection({
  dialect: "mysql",
  host: "localhost",
  database: "sampledb",
  user: "sampleuser",
  password: "samplepass",
});

connection.query(
  `create Table if Not exists sampletable(
        id integer Auto_Increment key,
        name Varchar (50) Not NULL,
        city Varchar (30),
        age Integer Not NULL
    )`,

  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Table created");
    }
    connection.close();
  }
);
