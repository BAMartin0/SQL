const fs = require("fs");
const path = require("path");
const sequelize = require("../config/connection");
// const { DataTypes } = require("sequelize");
const {Quiz} = require('../models/');


// Define the Quiz model
// const Quiz = sequelize.define("Quiz", {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: "user",
//       key: "id",
//     },
//   },
//   question: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   correct_answer: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   category: {
//     type: DataTypes.STRING,
//   },
//   difficulty: {
//     type: DataTypes.STRING,
//   },
//   answer: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   is_correct: {
//     type: DataTypes.BOOLEAN,
//   },
//   user_name: {
//     type: DataTypes.STRING,
//   },
// });

const populateTable = async () => {
  console.log('start populating table');
  try {
    await sequelize.authenticate();
    
    await sequelize.sync({ force: false }); // This will drop the table if it already exists and create a new one
    
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "quiz.json"), "utf8")
    );
    console.log('this is the data @@@@@@@@@@@@@@@@@@@@@@@@',data);

    await Quiz.bulkCreate(data);

  } catch (error) {
    console.error("Error loading data:", error);
  } finally {
    await sequelize.close();
  }
};

//populateTable();


module.exports = {populateTable};
