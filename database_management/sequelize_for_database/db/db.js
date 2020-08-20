const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: __dirname + "/tasks.db",
});

const Datatype = Sequelize.DataTypes;

const student = db.define("student", {
  id: {
    type: Datatype.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: Datatype.STRING,
    allowNull: false,
  },
});

async function task() {
  await db.sync();

  await student.create({ name: "piyush" });

  const students = await student.findAll();
  console.log("student found = ", students.length);

  students.forEach((s) => {
    console.log(`${s.id} \t ${s.name}`);
  });
}

task();

// db.authenticate()
//   .then(() => {
//     console.log("Connection Worked");
//   })
//   .catch((err) => {
//     console.error(err);
//   });
