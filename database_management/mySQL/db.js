const mysql = require("mysql2");
const e = require("express");

const connection = mysql.createConnection({
  dialect: "mysql",
  host: "localhost",
  database: "sampledb",
  user: "sampleuser",
  password: "samplepass",
});

connection.query(
  `create Table if Not exists sampletable(
        id INTEGER Auto_Increment PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER,
        city VARCHAR(30)
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
