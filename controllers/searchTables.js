const quiz = require('../models/quiz')


async function getQuestions(category, user){

    try{
        const question = await quiz.findAll({
            attributes:['question','correct_answer','user_name'],
            where:{
                correct_answer: true,
                category:'Animals',
                user_name:'rozierhj',
            },
        });
        console.log(question);

    }
    catch(error){
        console.error('could npt get table data',error);

    }


}

getQuestions('Animals','rozierhj');