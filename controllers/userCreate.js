const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const User = require("../models/user");
const usersFilePath = path.join(__dirname, "../seeds/users.json");


// Function to write data to users.json
function writeToJSONFile(data) {
  try {
    // Check if the file exists
    if (fs.existsSync(usersFilePath)) {
      // Read existing data
      const fileData = fs.readFileSync(usersFilePath, "utf-8");
      const json = JSON.parse(fileData);

      // Append new data
      json.push(data);

      // Write updated data back to the file
      fs.writeFileSync(usersFilePath, JSON.stringify(json, null, 2), "utf-8");
    } else {
      // If the file doesn't exist, create it and write the initial data
      fs.writeFileSync(usersFilePath, JSON.stringify([data], null, 2), "utf-8");
    }
  } catch (error) {
    console.error("Error writing to JSON file:", error);
  }
}

async function createUser(username, email, password) {
  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // Log user creation
    console.log("User created:", newUser.toJSON());

    // Write user data to users.json
    writeToJSONFile(newUser.toJSON());

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

module.exports = { createUser };
