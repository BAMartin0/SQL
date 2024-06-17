const router = require("express").Router();
// const path = require('path');
// const app = express();
// const {
//   callAPI,
//   createQuiz,
//   getQuizURL,
//   saveQuiz,
// } = require("../../utils/quizAPI.js");
const userRoutes = require("./userRoutes.js");
const quizRoutes = require("./quizRoutes.js")

router.use("/users", userRoutes);
router.use("/quizzes", quizRoutes);

module.exports = router;
