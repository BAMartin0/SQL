const router = require("express").Router();
const Quiz = require('../models/quiz')
const express = require("express");
const fs = require("fs");
const path = require("path");

// Path to quiz data JSON file
const quizDataPath = path.join(__dirname, "quiz.json");

// Read quiz data from JSON file
fs.readFile(quizDataPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading quiz data file:", err);
    return;
  }

  try {
    // Parse JSON data
    const Quiz = JSON.parse(data);

    // Define route to render quiz questions
    router.get("/results", (req, res) => {
      // Render quiz template with Quiz data
      res.render("score", { Quiz });
    });

    // Export Quiz array for use in other modules
    module.exports = Quiz;
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
});



module.exports = router;
