// const Sequelize = require("sequelize");

const User = require("./user");
const Quiz = require("./quiz");



// sequelize
//   .sync({ force: false }) // Set force to true to drop existing tables and recreate them
//   .then(() => {
//     console.log("Database synchronized successfully");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing database:", error);
//   });

module.exports = {User, Quiz};

  
