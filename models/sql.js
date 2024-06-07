// Here is where we set up our SQL model, for when we are ready to connect to a database.

// Add a comment indicating how this file fits into the MVC framework.
// This file is a Model.
// What it is responsible for handling?
// It is responsible for handling data and business logic.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SQL extends Model {}

SQL.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guest_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    has_nuts: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'sql',
  }
);

module.exports = Table;
