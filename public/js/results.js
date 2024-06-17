
const scoreUser = document.getElementById('scoreUser');
const scoreUserForTable = JSON.parse(sessionStorage.getItem('user123'));
scoreUser.value = scoreUserForTable.username;
console.log(scoreUser);

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const search = document.getElementById('category-table12');
        let searchValue = search.value;
        searchValue = convertToName(searchValue);
        const user_name = document.getElementById('scoreUser');
        const user_name_value = user_name.value;
        const category = {
            category: searchValue,
            user: user_name_value,
        }
        console.log(category);
        getResult(category)

/*

        .then((data)=>{

            return data;

        })
        .catch((err)=>{
            console.error("error at end",err);
        });
        */


    });
});

const getResult = (input) =>

    fetch('/score',{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(input),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ');
        }
        return response.text(); // Or `response.json()` if the server returns JSON
    })
    .then(data => {
        document.open();
        document.write(data);
        document.close();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });




    
    function convertToName(input){

            let answer = '';
        console.log(input);
        if(input === '20')answer = 'Mythology';
        else if(input === '21')answer='Sports';
        else if(input === '22')answer= 'Geography';
        else if(input === '23')answer = 'History';
        else if(input === '24')answer = 'Politics';
        else if(input === '25')answer = 'Art';
        else if(input === '26')answer = 'Celebrities';
        else if(input === '27')answer= 'Animals';
        else if(input === '28')answer = 'Vehicles';
    
        return answer;
        
    }