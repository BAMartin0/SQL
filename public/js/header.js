if(sessionStorage.getItem('user123') !== null && sessionStorage.length >= 1){
    const activeUser = JSON.parse(sessionStorage.getItem('user123'));
    const userMessage = document.getElementById('currentUser');
    userMessage.innerHTML = `Hello! ${activeUser.username}`;
    }else{
        const userMessage = document.getElementById('currentUser');
        userMessage.innerHTML = `Hello!`;
    }