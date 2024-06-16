const router = require('express').Router();
// const path = require('path');
// const app = express();
const {callAPI, createQuiz, getQuizURL, saveQuiz} = require('./quizAPI.js');
const pages = require('./homepage.js');

router.use('/',pages)

module.exports = router;