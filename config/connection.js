
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    logging: false, // Disable logging; default: console.log
    dialectOptions: {
        // Additional options if needed
    },
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit the process with an error code
    }
};

testConnection();

module.exports = sequelize;













// const Sequelize = require("sequelize");
// require("dotenv").config();

// const sequelize = process.env.DB_URL
//   ? new Sequelize(process.env.DB_URL)
//   : new Sequelize(
//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PASSWORD,
//       {
//         host: "localhost",
//         dialect: "postgres",
//       }
//     );

// module.exports = sequelize;
