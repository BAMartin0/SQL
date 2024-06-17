const express = require("express");
const router = express.Router();
const Quiz = require("../../models/quiz");
const withAuth = require("../utils/auth");

// Route to render quiz questions
router.get("/results", withAuth, async (req, res) => {
  try {
    const username = req.session.username; // Assuming username is stored in session

    const quizData = await Quiz.findAll({
      where: {
        username: username, // Filter by current authenticated user
      },
      order: [["username", "ASC"]],
    });

    const quizzes = quizData.map((quiz) => quiz.get({ plain: true }));

    res.render("score", { quizzes });
  } catch (err) {
    console.error("Error fetching quiz results:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router