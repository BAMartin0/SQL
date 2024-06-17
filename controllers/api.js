
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const {callAPI, createQuiz, getQuizURL, saveQuiz} = require('./quizAPI.js');
const Quiz = require('../models/quiz.js');


router.post('/input',(req,res)=>{

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

router.post('/output',(req,res)=>{

    console.log('we made it this far');

     saveQuiz(req.body);

       res.json({'response': 'quiz saved'});

    });

router.post('/user',(req,res)=>{

    const root = path.join(__dirname,'..');
    const findFolder = path.join(root,'seeds');
    console.log(path.resolve(root));

    if(!fs.existsSync(findFolder)){
        fs.mkdirSync(findFolder);
    }
    forJson = JSON.stringify(req.body);
    const filePath = path.join(findFolder,'users.json');
    fs.writeFile(filePath,forJson,(err)=>{
        if (err){
            console.error('error in writing json',err)
        }
        else{
            console.log('Finished writing file');
            //console.log('created json');
        }
    })

    res.json({'response': 'user saved'});

});

router.post('/search',(req,res)=>{

    getQuestions('tomy_boy', 'Politics')
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        console.error('error in server api',err);
    });

  //  const category = getCategory(req.body);

});

function getCategory(input){
    let answer = '';

    if(input.category === '20')answer = 'Mythology';
    else if(input.category === '21')answer = 'Sports';
    else if(input.category === '22')answer = 'Geography';
    else if(input.category === '23')answer = 'History';
    else if(input.category === '24')answer= 'Politics';
    else if(input.category === '25')answer = 'Art';
    else if(input.category === '26')answer = 'Celebrities';
    else if(input.category === '27')answer = 'Animals';
    else if(input.category === '28')answer = 'Vehicles';

  
    return answer;
}





async function getQuestions(user, category){

    try{
        const question = await Quiz.findAll({
            attributes:['question','correct_answer','answer','is_correct'],
            where: {
                user_name: `${user}`,
                category: `${category}`,
            },
        });
        // console.log(question);
        return question;

    }
    catch(error){
        console.error('could npt get table data',error);

    }


}



module.exports = router;