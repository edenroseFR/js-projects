let user = prompt("Who's there?");

if (user == 'Admin'){
    let password = prompt('Enter Password: ')

    if (password == 'TheMaster'){
        alert('Welcome!');
    } else if (password == ''){
        alert('Cancelled');
    } else{
        alert('Wrong Password')
    }
    
} else if (user == ''){
    alert('Cancelled');
} else{
    alert("I don't know you");
}