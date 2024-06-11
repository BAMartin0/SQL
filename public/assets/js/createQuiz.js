//post user data to the node server,js
const getInput = (input) =>

    fetch('/api/input',{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(input),
    })
    .then((res)=>res.json())
    .then((data)=>{
     //   console.log('Success', data);
        return data;
    })
    .catch((error)=>{
        console.error('error POST',error);
    });

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('createQuizTable');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
      //  console.log('click');
        const formData = new FormData(form);
       // console.log(formData);
        const entries = [...formData.entries()];
       // console.log(entries);
        //console.log(entries);
        const input = fixForm(entries);
        console.log(input);


        getInput(input)
        .then((data)=>{
            
            console.log(data);
            alert('Form submitted! Check the console for details.');
        })
        .catch((err)=>{
            console.error("error at end",err);
        });


    });
});

//arrange how that user inputs are setup when they are sent to the request for processing
function fixForm(form){

    const newForm = {};
    const category = form[1];
    const difficulty = form[2];
    const numQuestions = form[0];
    const type = form[3];

    newForm.category = category[1];
    newForm.difficulty = difficulty[1];
    newForm.numQuestions = numQuestions[1];
    newForm.type = type[1];

    const finalForm = processUserInput(newForm);

    return finalForm;

}

//translate user inputs into the values that the api needs to send to the quiz website
function processUserInput(input){

    if(input.type === 'multiple'){
        input.type = 'multiple';
    }
    if(input.type === 'boolean'){
        input.type = 'boolean';
    }
    if(input.category === 'Mythology')input.category = 20;
    else if(input.category === 'Sports')input.category = 21;
    else if(input.category === 'Geography')input.category = 22;
    else if(input.category === 'History')input.category = 23;
    else if(input.category === 'Polotics')input.category = 24;
    else if(input.category === 'Art')input.category = 25;
    else if(input.category === 'Celebrities')input.category = 26;
    else if(input.category === 'Animals')input.category = 27;
    else if(input.category === 'Vehicles')input.category = 28;

    return input;
    
}