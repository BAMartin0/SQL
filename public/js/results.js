
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");

  // Prefill username from sessionStorage
  const scoreUser = document.getElementById("scoreUser");
  const scoreUserForTable = JSON.parse(sessionStorage.getItem("user123"));
  if (scoreUserForTable) {
    scoreUser.value = scoreUserForTable.username;
  }

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();

    const category = document.getElementById("category-table12").value;
    const username = scoreUser.value;

    const searchParams = {
      category,
      username,
    };

    getResult(searchParams)
      .then((data) => {
        renderTable(data);
      })
      .catch((err) => {
        console.error("Error fetching results:", err);
      });
  });
});

const getResult = (input) => {
  return fetch("/search-results", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error during fetch:", error);
    });
};

const renderTable = (quizResults) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = ""; // Clear previous results

  quizResults.forEach((quiz) => {
    const row = document.createElement("tr");

    const questionCell = document.createElement("td");
    questionCell.textContent = quiz.question;
    row.appendChild(questionCell);

    const correctAnswerCell = document.createElement("td");
    correctAnswerCell.textContent = quiz.correct_answer;
    row.appendChild(correctAnswerCell);

    const answerCell = document.createElement("td");
    answerCell.textContent = quiz.answer;
    row.appendChild(answerCell);

    tbody.appendChild(row);
  });
};

// const scoreUser = document.getElementById('scoreUser');
// const scoreUserForTable = JSON.parse(sessionStorage.getItem('user123'));
// scoreUser.value = scoreUserForTable.username;
// console.log(scoreUser);

// document.addEventListener('DOMContentLoaded', function() {
//     const searchButton = document.getElementById('searchButton');

//     searchButton.addEventListener('click', function(event) {
//         event.preventDefault();
        
//         const search = document.getElementById('category-table12');
//         const searchValue = search.value;
//         const category = {
//             category: searchValue,
//         }

//         getResult(category)
//         .then((data)=>{

//             console.log(data);

//         })
//         .catch((err)=>{
//             console.error("error at end",err);
//         });


//     });
// });

// const getResult = (input) =>

//     fetch('/api/search',{
//         method: 'POST',
//         headers:{
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify(input),
//     })
//     .then((res)=>res.json())
//     .then((data)=>{
 
//         return data;
//     })
//     .catch((error)=>{
//         console.error('error POST',error);
//     });
