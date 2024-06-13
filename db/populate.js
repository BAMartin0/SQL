const fs = require("fs");
const path = require("path");
const sequelize = require("../config/connection");
const { DataTypes } = require("sequelize");

// Define the Question model
const Question = sequelize.define("Question", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  // quiz_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: "quiz",
  //     key: "id",
  //   },
  // },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correct_answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  difficulty: {
    type: DataTypes.STRING,
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_correct: {
    type: DataTypes.BOOLEAN,
  },
});

const populateTable = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true }); // This will drop the table if it already exists and create a new one

    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "quiz.json"), "utf8")
    );

    await Question.bulkCreate(data);

    console.log("Data successfully loaded!");
  } catch (error) {
    console.error("Error loading data:", error);
  } finally {
    await sequelize.close();
  }
};

populateTable();
