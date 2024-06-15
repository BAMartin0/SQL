const Sequelize = require("sequelize");

const User = require("./User");
const Quiz = require("./Quiz");

sequelize
  .sync({ force: false }) // Set force to true to drop existing tables and recreate them
  .then(() => {
    console.log("Database synchronized successfully");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });
