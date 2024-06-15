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
        loadUser(password, email, username);
        window.location.href = '/quiz';

    });
    createAccount.addEventListener('click', function(event) {
        event.preventDefault();
        loadUser(password, email, username);
        window.location.href = '/quiz';
    });
});

function loadUser(password, email, username){
    const user1 = new User('','','');
    user1.email = email.value;
    user1.username = username.value;
    user1.password = password.value;
    sessionStorage.setItem('user123', JSON.stringify(user1));
    console.log(user1);
}

const activeUser = JSON.parse(sessionStorage.getItem('user123'));
const userMessage = document.getElementById('currentUser');
userMessage.innerHTML = `Hello! ${activeUser.username}`;
