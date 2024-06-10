const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Answers extends Model {}

Answers.init(
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
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "questions",
        key: "id",
      },
    },
    user_answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "answers",
  }
);

module.exports = Answers;
