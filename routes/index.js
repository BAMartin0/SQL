const router = require('express').Router();
const path = require('path');
const {callAPI, createQuiz, getQuizURL} = require('../helper/quizAPI');

router.post('/input',(req,res)=>{

    console.log('we made it this far');
    console.log(req.body);
    const apiURL = getQuizURL(req.body);

    callAPI(apiURL)
    .then((data)=>{

        let quiz = createQuiz(data);
        
        console.log(quiz);
       res.send(quiz);

        // const filePath = path.join(__dirname,'quiz.html');
        // res.sendFile(filePath);
    })
    .catch((err)=>{
        console.error('error in server api',err);
    });
});

router.get('/input',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/quiz.html'));
});
module.exports = router;