

function questionRow(data, num, appendTo, isAnswer){

    const oldRow = document.getElementById(`${appendTo}`);
    const newRow = document.createElement('tr');
    newRow.id = `row_${num}`;
    newRow.style.borderCollapse = 'collapse';
    newRow.style.width = '100%';
    newRow.style.marginLeft = '20px';
    newRow.style.border = '2px solid black';
    newRow.style.background = 'lightblue';

    const Qcell = document.createElement('td');
    Qcell.textContent =  data[0];
    let mixedArray = mixUp([1,2,3,4]);
    mixedArray = mixUp(mixedArray);
   // console.log(mixedArray,' mixed array');
    const op1 = document.createElement('td');
        op1.textContent = data[mixedArray[0]];
        op1.className = 'question';

    const op2 = document.createElement('td');
        op2.textContent = data[mixedArray[1]];
        op2.className = 'question';

    const op3 = document.createElement('td');
        op3.textContent = data[mixedArray[2]];
        op3.className = 'question';

    const op4 = document.createElement('td');
        op4.textContent = data[mixedArray[3]];
        op4.className = 'question';

    const answerRow = document.createElement('td');
        answerRow.textContent = '';
            
        newRow.appendChild(Qcell);
        newRow.appendChild(op1);
        newRow.appendChild(op2);
        newRow.appendChild(op3);
        newRow.appendChild(op4);
        newRow.appendChild(answerRow);



        oldRow.parentNode.appendChild(newRow);
}

function answerRow(data, num, appendTo, isAnswer){

    const oldRow = document.getElementById(`${appendTo}`);
    const newRow = document.createElement('tr');
    newRow.id = `row_${num}`;
    newRow.style.borderCollapse = 'collapse';
    newRow.style.marginLeft = '20px';
    newRow.style.border = '2px solid black';
    newRow.style.width = '100%';
    newRow.style.background = 'lightorange';

    const Qcell = document.createElement('td');

    Qcell.textContent = data[0];
    

    const op1 = document.createElement('td');
        const op1Box = document.createElement('input');
        op1Box.className = 'box';
        op1Box.type = 'checkbox';
        op1.appendChild(op1Box);

    const op2 = document.createElement('td');
        const op2Box = document.createElement('input');
        op2Box.className = 'box';
        op2Box.type = 'checkbox';
        op2.appendChild(op2Box);

    const op3 = document.createElement('td');
        const op3Box = document.createElement('input');
        op3Box.className ='box';
        op3Box.type = 'checkbox';
        op3.appendChild(op3Box);

    const op4 = document.createElement('td');
        const op4Box = document.createElement('input');
        op4Box.className='box';
        op4Box.type = 'checkbox';
        op4.appendChild(op4Box);

    const answerRow = document.createElement('td');
        answerRow.className = 'userAnswer';
        answerRow.textContent = '';

        newRow.appendChild(Qcell);
        newRow.appendChild(op1);
        newRow.appendChild(op2);
        newRow.appendChild(op3);
        newRow.appendChild(op4);         
        newRow.appendChild(answerRow);

        oldRow.parentNode.appendChild(newRow);

}

function firstRow(data, num, appendTo, isAnswer){

    const oldRow = document.getElementById(`${appendTo}`);
    const newRow = document.createElement('tr');
    newRow.id = `row_${num}`;
    newRow.style.borderCollapse = 'collapse';
    newRow.style.width = '100%';
    newRow.style.marginLeft = '20px';
    newRow.style.border = '2px solid black';
    newRow.style.background = 'lightred';

    const Qcell = document.createElement('td');
    Qcell.textContent = 'Question';

    const op1 = document.createElement('td');
        op1.textContent = 'Option 1';

    const op2 = document.createElement('td');
        op2.textContent = 'Option 2';

    const op3 = document.createElement('td');
        op3.textContent = 'Option 3';

    const op4 = document.createElement('td');
        op4.textContent = 'Option 4';

    const answerRow = document.createElement('td');
        answerRow.textContent = 'User Answer';

        newRow.appendChild(Qcell);
        newRow.appendChild(op1);
        newRow.appendChild(op2);
        newRow.appendChild(op3);
        newRow.appendChild(op4);
        newRow.appendChild(answerRow);

        oldRow.parentNode.appendChild(newRow);
}

function createRow(data, num, appendTo, isAnswer){

    if(num % 2 !== 0){
        questionRow(data, num, appendTo, isAnswer);
    }
    else{
        answerRow(data, num, appendTo, isAnswer);
    }

}

function createQuiz(data, numQuestions){
    
    let quiz = [];
    let quizRow = [];
   // const op1 = 
    let options = ['Answers',true,false,false,false];
    for(let Q = 0; Q < data.length; Q++){
      //  console.log(data[Q]);
        quizRow = [
            data[Q].question,
            data[Q].correct_answer,
            data[Q].incorrect_answers[0],
            data[Q].incorrect_answers[1],
            data[Q].incorrect_answers[2]
        ];
        quiz.push(quizRow);
        quiz.push(options);
    }

    return quiz;
}

// function createCheckBox (){

//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.checked = item.active;

//     return checkbox;

// }

function addButton(parent, data, option){

        // console.log(data);
     //   console.log(parent);
        const oldRow = document.getElementById(`${parent}`);
     //   console.log(oldRow);
        const btn = document.createElement('submit');
        btn.className = 'btn btn-primary';
        btn.type = 'submit';
        btn.textContent = option;
        btn.style.margin = '10px';
        oldRow.parentNode.appendChild(btn);

        btn.addEventListener('click',function(event){

            event.preventDefault();
      //      console.log('we have clicked');
            if(btn.textContent === 'See Results'){
                fullArray = checkBoxSelection(data);
               // console.log(fullArray);
               fetch('/api/output',{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(fullArray),
                })
                .then((res)=>res.json())
                .then((data)=>{
             //   console.log('Success', data);
                    return data;
                })
                .catch((error)=>{
                    console.error('error POST',error);
                });


            }
            if(btn.textContent === 'New Quiz'){
                location.reload();
            }
            
            alert('we have submitted answers');
        });



    //return btn;
}

// function buttonRow(num, appendTo, data){

//     const oldRow = document.getElementById(`${appendTo}`);
//     const newRow = document.createElement('tr');
//     newRow.id = `row_${num}`;
//     newRow.style.borderCollapse = 'collapse';
//     newRow.style.width = '100%';
//     newRow.style.marginLeft = '20px';
//     newRow.style.border = '2px solid black';
//     newRow.style.background = 'lightred';

//     const op1 = document.createElement('td');
//        op1.id = 'button1';
//    //    console.log(op1);
//        addButton(`${op1.id}`, data);
        

//     const op2 = document.createElement('td');
//         op2.id = 'button2';
//         addButton(`button2`, data);

//     const op3 = document.createElement('td');
//        // op3.appendChild(addButton(data));
//         op3.textContent = 'last row 3';

//         newRow.appendChild(op1);
//         newRow.appendChild(op2);
//         newRow.appendChild(op3);
//         // newRow.appendChild(addButton(data, `row_${num}`));
        
//         // addButton(`row_${lastRow}`, data);
//         // addButton(`row_${lastRow}`, data);
//         // addButton(`row_${lastRow}`, data);
//         oldRow.parentNode.appendChild(newRow);
// }


function checkBoxSelection(data){

   // console.log(data,'quiz data');
    let rowNum = 1;
    let escape = 0
    let dataCount = 0;
 //  console.log('we are in function');
 //   console.log('function data', data);
    while(document.getElementById(`row_${rowNum}`) !== undefined && 
      escape < 50 && document.getElementById(`row_${rowNum}`) !== null){
     //   console.log(document.getElementById(`row_${rowNum}`));
     //   console.log('we are in first loop');
        if(rowNum % 2 === 0){

            const row = document.getElementById(`row_${rowNum}`);
            const questions = document.getElementById(`row_${rowNum-1}`)

            let cellNum = 0;

            while(cellNum < 4){

                if(row !== null){

                   const box = row.getElementsByClassName('box')[cellNum];
                   const question = questions.getElementsByClassName('question')[cellNum];

                if(box.checked === true){
                    let answer = question.textContent;
                    data[dataCount].user_answer = answer;
                    // let correctAnswer = data[rowNum-1].correct_answer;
                    if(answer === data[dataCount].correct_answer){
                     //   console.log('your were right')
                        row.getElementsByClassName('userAnswer')[0].textContent = 'Correct';
                        data[dataCount].was_correct = true;

                    }
                    else{

                      //  console.log('you were wrong');
                        row.getElementsByClassName('userAnswer')[0].textContent = 'Wrong';
                        data[dataCount].was_correct = false;
                    }
                    
                    dataCount++;
                }
                   
            }
                // if(row.getElementsByTagName('td')[cellNum].checked){
                //     console.log(`${cellNum} was checked`);
                // }
                cellNum++;
            }

        }        
        rowNum++;
        escape++;
    }

    return data;

}

function mixUp(array){
    const answers = array;

    for(let i = answers.length - 1; i > 0; i--){

        const j = Math.floor(Math.random()*(i+1));

        [answers[i],answers[j]] = [answers[j], answers[i]];

        return answers;
    }
}