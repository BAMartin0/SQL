class User {
    constructor(email, username, password){
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

document.addEventListener('DOMContentLoaded', function() {

    const signIn = document.getElementById('signIn');
    const createAccount = document.getElementById('createAccount');
    const password = document.getElementById('inputPassword5');
    const email = document.getElementById('exampleFormControlInput1');
    const username = document.getElementById('username');
    console.log(signIn);

    signIn.addEventListener('click', async(event) => {
        event.preventDefault();
        const newUserName = loadUser(password, email, username);

        getUser(newUserName)
        .then((data)=>{
            window.location.href = '/quiz';
         })
         .catch((err)=>{
             console.error("error at end",err);
         });

    });
    createAccount.addEventListener('click', function(event) {
        event.preventDefault();
        const newUserName = loadUser(password, email, username);

        getUser(newUserName)
        .then((data)=>{
            window.location.href = '/quiz';
         })
         .catch((err)=>{
             console.error("error at end",err);
         });
    });
});

function loadUser(password, email, username){
    const user1 = new User('','','');
    user1.email = email.value;
    user1.username = username.value;
    user1.password = password.value;
    sessionStorage.setItem('user123', JSON.stringify(user1));
    console.log(user1);

    return user1;
}

if(sessionStorage.getItem('user123') !== null && sessionStorage.length >= 1){
const activeUser = JSON.parse(sessionStorage.getItem('user123'));
const userMessage = document.getElementById('currentUser');
userMessage.innerHTML = `Hello! ${activeUser.username}`;
}
const getUser = (input) =>

    fetch('/api/user',{
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