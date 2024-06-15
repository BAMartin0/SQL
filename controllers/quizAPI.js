const express = require('express');
const path = require('path');
const fs = require('fs');
const {populateTable} = require('../seeds/populate.js')
// const { stringify } = require('querystring');
// const axios = require('axios');

// const app = express();
// const api = require('./routes/index.js');

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

//class for creating an object that represents one question with all its details (type, difficulty, category...)
class Question{
    constructor(type, difficulty, category, question, correct_answer, incorrect_answers, answer, is_correct){
        this.type = type;
        this.difficulty = difficulty;
        this.category = category;
        this.question = question;
        this.correct_answer = correct_answer;
        this.incorrect_answers = incorrect_answers;
        this.answer = answer;
        this.is_correct = is_correct;
    }
}

//call to the quiz website api database
async function callAPI(url){
    console.log('we did it');
    const response = await fetch(url);
    const data = await response.json();
    return data;
    
}

//function save quiz setup to a json file
function saveQuiz(data){
    
    const root = path.join(__dirname,'..');
    const findFolder = path.join(root,'seeds');
    console.log(path.resolve(root));

    if(!fs.existsSync(findFolder)){
        fs.mkdirSync(findFolder);
    }
    forJson = JSON.stringify(data);
    const filePath = path.join(findFolder,'quiz.json');
    fs.writeFile(filePath,forJson,(err)=>{
        if (err){
            console.error('error in writing json',err)
        }
        else{
            console.log('Finished writing file');
            populateTable();
            //console.log('created json');
        }
    })
}

//creates an array of objects. each object is a single questions with default properties (type, difficulty etc. with a user answer and answer was correct field added)
function createQuiz(data){
    const results = data.results;
    let allQuestions = [];
   // console.log(results);
    for(let i =0; i < results.length; i++){
        allQuestions[i] = new Question();
        allQuestions[i].type = results[i].type;
        allQuestions[i].difficulty = results[i].difficulty;
        allQuestions[i].category = results[i].category;
        allQuestions[i].correct_answer = results[i].correct_answer;
        allQuestions[i].question = results[i].question;
        allQuestions[i].incorrect_answers = results[i].incorrect_answers;
        allQuestions[i].answer = '';
        allQuestions[i].is_correct = false;
    }
    saveQuiz(allQuestions);

    return allQuestions;
}

//takes in details that user enters into table to set up a url for the api call
function getQuizURL(quizDetails){

    const {category, difficulty, numQuestions, type} = quizDetails;
  //  console.log(quizDetails);
    const url =`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;

    return url;

}

module.exports = {callAPI, createQuiz, getQuizURL, saveQuiz};