const button = document.querySelector('#button');
const usersContainer = document.querySelector('.users-container');
const url = './static/users.json';

button.onclick = () => {
    getUsersInfo(url);
}

async function getUsersInfo(url) {
    let response = await fetch(url);
    let users = await response.json();
    displayUsersInfo(users);
}

async function displayUsersInfo(data) {

    data.forEach(user => {
        usersContainer.innerHTML += `<br/><h3>User id:  ${user.id} </h3>  Name: ${user.first_name}<br/>
        Lastname: ${user.last_name}<br/> Email: ${user.email}<br/>`;
        getUserPhoto(user.photo);
        
    });
}

async function getUserPhoto(photo) {
    let photoResponse = await fetch(photo)
    let blob = await photoResponse.blob();


    img = document.createElement('img');
    document.body.append(img);
    
    img.src = URL.createObjectURL(blob);

}