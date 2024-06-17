const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const Quiz = require("../../models/quiz");
const withAuth = require("../../utils/auth");
const {
  callAPI,
  createQuiz,
  getQuizURL,
  saveQuiz,
} = require("../../utils/quizAPI");

router.post("/input", async (req, res) => {
  try {
    const apiURL = getQuizURL(req.body);
    const data = await callAPI(apiURL);
    const quiz = createQuiz(data);
    res.json(quiz);
  } catch (err) {
    console.error("Error in server API:", err);
    res.status(500).json({ message: "Failed to fetch quiz data" });
  }
});

router.post("/output", async (req, res) => {
  try {
    await saveQuiz(req.body);
    res.json({ response: "Quiz saved" });
  } catch (err) {
    console.error("Error saving quiz:", err);
    res.status(500).json({ message: "Failed to save quiz" });
  }
});

router.post("/user", async (req, res) => {
  try {
    const root = path.join(__dirname, "..", "..");
    const findFolder = path.join(root, "seeds");

    if (!fs.existsSync(findFolder)) {
      fs.mkdirSync(findFolder);
    }

    const filePath = path.join(findFolder, "users.json");
    await fs.promises.writeFile(filePath, JSON.stringify(req.body));
    res.json({ response: "User saved" });
  } catch (err) {
    console.error("Error writing JSON:", err);
    res.status(500).json({ message: "Failed to save user data" });
  }
});

router.post("/search", (req, res) => {
  const category = getCategory(req.body);
  res.json(category);
});

function getCategory(input) {
  const categories = {
    20: "Mythology",
    21: "Sports",
    22: "Geography",
    23: "History",
    24: "Politics",
    25: "Art",
    26: "Celebrities",
    27: "Animals",
    28: "Vehicles",
  };
  return categories[input.category] || "";
}

router.post("/search-results", withAuth, async (req, res) => {
  const { category } = req.body;
  const username = req.session.username;

  const whereClause = { username };
  if (category) whereClause.category = category;

  try {
    const quizResults = await Quiz.findAll({ where: whereClause });
    const results = quizResults.map((result) => ({
      question: result.question,
      correct_answer: result.correct_answer,
      answer: result.answer,
      is_correct: result.is_correct,
    }));
    res.json(results);
  } catch (error) {
    console.error("Error loading quiz results:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Quiz = require("../models/quiz");
// const fs = require("fs");
// const path = require("path");
// const withAuth = require('../utils/withAuth');

// // Path to quiz data JSON file
// const quizDataPath = path.join(__dirname, "../seeds/quiz.json");

// // Read quiz data from JSON file
// fs.readFile(quizDataPath, "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading quiz data file:", err);
//     return;
//   }

//   try {
//     // Parse JSON data
//     const quizzes = JSON.parse(data);

//     // Route to render quiz questions
//     router.get("/results", withAuth, async (req, res) => {
//       try {
//         const quizData = await Quiz.findAll({
//           order: [["username", "ASC"]],
//         });

//         const quizzes = quizData.map((project) => project.get({ plain: true }));

//         res.render("score", { quizzes });
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     });

//     // Route to search quiz results based on category and username
//     router.post("/search-results", withAuth, async (req, res) => {
//       const { category, user_name } = req.body;

//       let whereClause = {};

//       if (category) {
//         whereClause.category = category;
//       }

//       if (user_name) {
//         whereClause.user_name = user_name;
//       }

//       try {
//         const quizResults = await Quiz.findAll({
//           where: whereClause,
//         });

//         const results = quizResults.map((result) => ({
//           question: result.question,
//           correct_answer: result.correct_answer,
//           answer: result.answer,
//           is_correct: result.is_correct,
//         }));

//         res.json(results);
//       } catch (error) {
//         console.error("Error loading quiz results:", error);
//         res.status(500).send("Internal Server Error");
//       }
//     });
//   } catch (err) {
//     console.error("Error parsing JSON:", err);
//   }
// });

// module.exports = router;

// const router = require("express").Router();
// const Quiz = require('../models/quiz')
// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// // Path to quiz data JSON file
// const quizDataPath = path.join(__dirname, "../seeds/quiz.json");

// // Read quiz data from JSON file
// fs.readFile(quizDataPath, "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading quiz data file:", err);
//     return;
//   }

//   try {
//     // Parse JSON data
//     const Quiz = JSON.parse(data);

//     // Define route to render quiz questions
//     router.get("/results", async (req, res) => {

//     try {
//     const quizData = await Quiz.findAll({
//       order: [['name', 'ASC']],
//     });

//     const quizzes = quizData.map((project) => project.get({ plain: true }));

//     res.render('score', { quizzes });

//   } catch (err) {
//     res.status(500).json(err);
//   }
//       // // Render quiz template with Quiz data
//       // res.render("score", { Quiz });
//     });

//     // Export Quiz array for use in other modules
//     module.exports = Quiz;
//   } catch (err) {
//     console.error("Error parsing JSON:", err);
//   }
// });

// module.exports = router;
