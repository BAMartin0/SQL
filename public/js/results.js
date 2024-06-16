
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', function(event) {
        event.preventDefault();

        const search = document.getElementById('category-table12');
        const searchValue = search.value;
        const category = {
            category: searchValue,
        }

        getResult(category)
        .then((data)=>{

            console.log(data);

        })
        .catch((err)=>{
            console.error("error at end",err);
        });


    });
});

const getResult = (input) =>

    fetch('/api/search',{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(input),
    })
    .then((res)=>res.json())
    .then((data)=>{
 
        return data;
    })
    .catch((error)=>{
        console.error('error POST',error);
    });
