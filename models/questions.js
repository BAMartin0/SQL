const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Questions extends Model {}

Questions.Init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  question_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correct_answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  incorrect_answers: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  difficulty: {
    type: DataTypes.STRING,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "questions",
});

module.exports = Questions;
