const { populateUsers } = require("../seeds/populateUsers");
const sequelize = require("../config/connection");

async function runPopulationScript() {
  try {
    await populateUsers();
    console.log("User population script executed successfully.");
  } catch (error) {
    console.error("Error running population script:", error);
  } finally {
    // Optionally close Sequelize connection if needed
    await sequelize.close();
  }
}

runPopulationScript();
