const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const Quiz = require('../models/quiz.js');
const {callAPI, createQuiz, getQuizURL, saveQuiz} = require('./quizAPI.js');

const api = require('./api.js');

router.use('/api',api)

router.get('/', async(req, res)=>{
    res.render('login');
});

router.get('/quiz', async(req, res)=>{
    res.render('quiz');
});

router.get('/home', async(req, res)=>{
    res.render('login');
});

router.get('/score', async(req, res)=>{


    res.render('score');
});

router.post('/score',async(req, res)=>{
    const tableFilters = req.body;
    console.log(tableFilters);
    try{
        const score = await Quiz.findAll({
            attributes:['question','correct_answer','answer'],
            where: {
                user_name: tableFilters.user,
                category: tableFilters.category,
            },
        });
        //  console.log(score);

         const simplifiedScores = score.map(score => score.dataValues); 
        console.log(simplifiedScores)
        res.render('score',{score : simplifiedScores});
    }
    catch(error){
        console.error('could npt get table data',error);
        res.status(500).send('Initial server error');

    }
});

module.exports = router;