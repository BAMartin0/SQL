const router = require('express').Router();
const path = require('path');
const {callAPI, createQuiz, getQuizURL} = require('./quizAPI');

router.post('/input',(req,res)=>{

    console.log('we made it this far');
  //  console.log(req.body);
    const apiURL = getQuizURL(req.body);

    callAPI(apiURL)
    .then((data)=>{

        let quiz = createQuiz(data);
        
     //   console.log(quiz);
        //res.json(quiz);
       res.send(quiz);

        // const filePath = path.join(__dirname,'quiz.html');
        // res.sendFile(filePath);
    })
    .catch((err)=>{
        console.error('error in server api',err);
    });
});

module.exports = router;