const router = require('express').Router();
// const path = require('path');
const {callAPI, createQuiz, getQuizURL, saveQuiz} = require('./quizAPI.js');

router.get('/', async(req, res)=>{
    res.render('login');
})

router.get('/quiz', async(req, res)=>{
    res.render('quiz');
})

router.get('/home', async(req, res)=>{
    res.render('login');
})

router.get('/quiz_mc', async(req, res)=>{
    res.render('quiz_mc');
})

router.get('/createQuiz', async(req, res)=>{
    res.render('createQuiz');
})

router.get('/score', async(req, res)=>{
    res.render('score');
})

router.post('/api/input',(req,res)=>{

    console.log('we made it this far');
  //  console.log(req.body);
    const apiURL = getQuizURL(req.body);

    callAPI(apiURL)
    .then((data)=>{

        let quiz = createQuiz(data);
        
     //   console.log(quiz);
        res.json(quiz);
       //res.send(quiz);

        // const filePath = path.join(__dirname,'quiz.html');
        // res.sendFile(filePath);
    })
    .catch((err)=>{
        console.error('error in server api',err);
    });
});

router.post('/api/output',(req,res)=>{

    console.log('we made it this far');
  //  console.log(req.body);
    //const apiURL = getQuizURL(req.body);
     saveQuiz(req.body);
    //callAPI(apiURL)
        //   console.log(quiz);
        //res.json(quiz);
       res.json({'response': 'quiz saved'});

        // const filePath = path.join(__dirname,'quiz.html');
        // res.sendFile(filePath);
    });

module.exports = router;