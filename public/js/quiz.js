

function createTable(data){

    
    const table = document.createElement(`table`);
    table.id = 'headerTable'
    table.style.marginTop = '50px';
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

function questionRow(data, num, appendTo){

    const oldRow = document.getElementById(`${appendTo}`);
    const newRow = document.createElement('tr');
    newRow.id = `row_${num}`;
    newRow.style.borderCollapse = 'collapse';
    newRow.style.width = '100%';
    newRow.style.marginLeft = '20px';
    newRow.style.border = '2px solid black';
    newRow.style.background = 'lightblue';

    const Qcell = document.createElement('td');
    Qcell.textContent = data[0];
    // Qcell.style.border = '1px solid black';
    // Qcell.style.padding = '10px';
    // Qcell.style.width = setWidth(40, newRow.id);
   // Qcell.style.marginLeft = '50px';
    

    const op1 = document.createElement('td');
        op1.textContent = data[1];
        // op1.style.border = '1px solid black';
        // op1.style.padding = '10px';
        // op1.style.width = setWidth(15, newRow.id);

    const op2 = document.createElement('td');
        op2.textContent = data[2];
        // op2.style.border = '1px solid black';
        // op2.style.padding = '10px';
        // op2.style.width = setWidth(15, newRow.id);

    const op3 = document.createElement('td');
        op3.textContent = data[3];
        // op3.style.border = '1px solid black';
        // op3.style.padding = '10px';
        // op3.style.width = setWidth(15, newRow.id);

    const op4 = document.createElement('td');
        op4.textContent = data[4];
        // op4.style.border = '1px solid black';
        // op4.style.padding = '10px';
        // op4.style.width = setWidth(15, newRow.id);

        newRow.appendChild(Qcell);
        newRow.appendChild(op1);
        newRow.appendChild(op2);
        newRow.appendChild(op3);
        newRow.appendChild(op4);

        oldRow.parentNode.appendChild(newRow);
}

function answerRow(data, num, appendTo){

    const oldRow = document.getElementById(`${appendTo}`);
    const newRow = document.createElement('tr');
    newRow.id = `row_${num}`;
    newRow.style.borderCollapse = 'collapse';
    newRow.style.marginLeft = '20px';
    newRow.style.border = '2px solid black';
    newRow.style.width = '100%';
    newRow.style.background = 'lightorange';

    const Qcell = document.createElement('td');
    // Qcell.style.border = '1px solid black';
    // Qcell.style.padding = '10px';
    // Qcell.style.width = setWidth(40, newRow.id);
    Qcell.textContent = data[0];
    

    const op1 = document.createElement('td');
        // op1.style.border = '1px solid black';
        // op1.style.padding = '10px';
        // op1.style.width = setWidth(15, newRow.id);
        op1.appendChild(createCheckBox());

    const op2 = document.createElement('td');
        // op2.style.border = '1px solid black';
        // op2.style.padding = '10px';
        // op2.style.width = setWidth(15, newRow.id);
        op2.appendChild(createCheckBox());

    const op3 = document.createElement('td');
        // op3.style.border = '1px solid black';
        // op3.style.padding = '10px';
        // op3.style.width = setWidth(15, newRow.id);
        op3.appendChild(createCheckBox());

    const op4 = document.createElement('td');
        // op4.style.border = '1px solid black';
        // op4.style.padding = '10px';
        // op4.style.width = setWidth(15, newRow.id);
        op4.appendChild(createCheckBox());

        newRow.appendChild(Qcell);
        newRow.appendChild(op1);
        newRow.appendChild(op2);
        newRow.appendChild(op3);
        newRow.appendChild(op4);

        oldRow.parentNode.appendChild(newRow);

}

function firstRow(data, num, appendTo){

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
    // Qcell.style.border = '1px solid black';
    // Qcell.style.padding = '10px';
    // Qcell.style.width = setWidth(40, newRow.id);
    

    const op1 = document.createElement('td');
        op1.textContent = 'Option 1';
        // op1.style.border = '1px solid black';
        // op1.style.padding = '10px';
        // op1.style.width = setWidth(15, newRow.id);

    const op2 = document.createElement('td');
        op2.textContent = 'Option 2';
        // op2.style.border = '1px solid black';
        // op2.style.padding = '10px';
        // op2.style.width = setWidth(15, newRow.id);

    const op3 = document.createElement('td');
        op3.textContent = 'Option 3';
        // op3.style.border = '1px solid black';
        // op3.style.padding = '10px';
        // op3.style.width = setWidth(15, newRow.id);

    const op4 = document.createElement('td');
        op4.textContent = 'Option 4';
        // op4.style.border = '1px solid black';
        // op4.style.padding = '10px';
        // op4.style.width = setWidth(15, newRow.id);

        newRow.appendChild(Qcell);
        newRow.appendChild(op1);
        newRow.appendChild(op2);
        newRow.appendChild(op3);
        newRow.appendChild(op4);

        oldRow.parentNode.appendChild(newRow);
}

function setStyle(cellToStyle){
    cellToStyle.border = '1px solid black';
    cellToStyle.padding = '10px';
    cellToStyle.width = setWidth(20);
}

function setWidth(percentWidth, row){

    
    const newRows = document.getElementById(row);
    if(newRows !== null){
        console.log(row);
        const rowWidth = newRows.offsetWidth;
        return (percentWidth/100)*rowWidth +'px';
    }


}

function createRow(data, num, appendTo){

    if(num % 2 !== 0){
        questionRow(data, num, appendTo);
    }
    else{
        answerRow(data, num, appendTo);
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

function createCheckBox (){

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    return checkbox;

}

function addButton(parent){

    const oldRow = document.getElementById(`${parent}`);
    const btn = document.createElement('submit');
    btn.className = 'btn btn-primary';
    btn.type = 'submit';

    oldRow.parentNode.appendChild(btn);

    //return btn;
}