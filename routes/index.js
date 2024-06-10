const router = require('express').Router();
const {callAPI, createQuiz, getQuizURL} = require('../helper/quizAPI');

router.post('/input',(req,res)=>{

    console.log(req.body);
    const apiURL = getQuizURL(req.body);

    callAPI(apiURL)
    .then((data)=>{

        let quiz = createQuiz(data);
        
        //console.log(quiz);
        res.send(quiz);
    })
    .catch((err)=>{
        console.error('error in server api',err);
    });
})

module.exports = router;