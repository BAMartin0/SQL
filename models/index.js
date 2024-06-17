const Sequelize = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./user");
const Quiz = require("./quiz");

User.hasMany(Quiz, {
  foreignKey: 'user_id', 
  onDelete: 'CASCADE'
})

Quiz.belongsTo(User, {
  foreignKey: "user_id"
})

Sequelize
  .sync({ force: false }) // Set force to true to drop existing tables and recreate them
  .then(() => {
    console.log("Database synchronized successfully");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

  
