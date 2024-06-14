

function createTable(data){

    
    const table = document.createElement(`table`);
    table.id = 'headerTable'
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';

    const headerRow = document.createElement('tr');

    const headers = ['question'];
    if(data[0].type === 'multiple'){
        headers.push('option 1');
        headers.push('option 2');
        headers.push('option 3');
        headers.push('option 4');
    }else{
        headers.push('true');
        headers.push('false');
    }
    headers.forEach(headerText =>{
        const header = document.createElement('th');
        header.style.border = '1px solid black';
        header.style.padding = '10px';
        header.backgroundColor = 'orange';
        header.textContent = headerText;
        headerRow.appendChild(header);
    });



    table.appendChild(headerRow);

    const firstTable = document.getElementById('createQuizTable');

    firstTable.appendChild(table);

}

function testRow(){

}

function createRow(data, num, appendTo){

   // console.log(data);

    const oldRow = document.getElementById(`${appendTo}`);
    const newRow = document.createElement('tr');
    newRow.id = `row_${num}`;

    const Qcell = document.createElement('td');
    Qcell.textContent = data[0];
    const op1 = document.createElement('td');

        op1.textContent = data[1];
    const op2 = document.createElement('td');
        op2.textContent = data[2];
    const op3 = document.createElement('td');
        op3.textContent = data[3];
    const op4 = document.createElement('td');
        op4.textContent = data[4];

        newRow.appendChild(Qcell);
        newRow.appendChild(op1);
        newRow.appendChild(op2);
        newRow.appendChild(op3);
        newRow.appendChild(op4);

        oldRow.parentNode.appendChild(newRow);


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
