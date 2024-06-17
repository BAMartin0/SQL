const router = require("express").Router();
// const { callAPI, createQuiz, getQuizURL, saveQuiz } = require("./quizAPI.js");
// Importing route handlers
const apiRoutes = require("./api/index"); // Assuming this handles API-related routes
const homeRoutes = require("./homepage"); // Assuming this handles home page routes

// Setting up routes
router.use("/", homeRoutes); // Mounting homeRoutes on the root path '/'
router.use("/api", apiRoutes); // Mounting apiRoutes on '/api' path

module.exports = router;
