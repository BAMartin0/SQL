const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");

class Quiz extends Model {}

Quiz.init(
  {
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
    user_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "quiz",
  }
);

module.exports = Quiz;
