const button = document.querySelector('#button');
const usersContainer = document.querySelector('.users-container');
const url = 'http://localhost:3000/';

button.onclick = () => {
    getUsersInfo(url);
}

async function getUsersInfo(url) {
    const response = await fetch(url);
    const users = await response.json();
    displayUsersInfo(users);
}

function displayUsersInfo(data) {
    data.forEach(user => {
        usersContainer.innerHTML += `
        <br/>
        <h3>
            User id:  ${user.id}
        </h3>
        Name: ${user.first_name}
        <br/>
        Lastname: ${user.last_name}
        <br/> 
        Email: ${user.email}
        <br/> 
        <img src ="${user.photo}" alt="photo + ${user.id} ">`;
    });
}