const Sequelize = require('sequelize');

const User = require('./user');
const Questions = require('./questions');
// const Answers = require('./answers');
// const Scores = require('./scores');

// User.hasMany(Answers);
// Answers.belongsTo(User);

// Questions.hasMany(Answers);
// Answers.belongsTo(Questions);

// Questions.hasOne(Answers, { as: "correctAnswer" });


sequelize
  .sync({ force: false }) // Set force to true to drop existing tables and recreate them
  .then(() => {
    console.log("Database synchronized successfully");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });