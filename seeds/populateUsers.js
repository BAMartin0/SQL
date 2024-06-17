const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const User = require("../models/user");
const usersFilePath = path.join(__dirname, "../seeds/users.json");

async function populateUsers() {
  try {
    // Read JSON file
    const fileData = fs.readFileSync(usersFilePath, "utf-8");
    const userData = JSON.parse(fileData);

    // Iterate over each user object and create a user record
    for (let user of userData) {
      // Destructure user object
      const { username, email, password } = user;

      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user in database
      await User.create({
        username: username,
        email: email,
        password: hashedPassword,
      });

      console.log(`User ${username} created successfully.`);
    }

    console.log("User population complete.");
  } catch (error) {
    console.error("Error populating users:", error);
  }
}

module.exports = { populateUsers };
