

function createTable(data){

    const table = document.createElement('table');
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

function createQuiz(data){
    
    let quiz = [];
    let quizRow = [];
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
