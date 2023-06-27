let nameForm = document.querySelector('#name-form');
let logoutBtn = document.querySelector('#logout');
let welcomeConteiner = document.querySelector('#welcome');

nameForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#name');
    localStorage.setItem('name', nameInput.value);

    checkUser();
});

const checkUser = () => {
    const username = localStorage.getItem("name");
    if(username) {
        nameForm.style.display = 'none';
        welcomeConteiner.style.display = 'block';

        const userNameElement = document.querySelector('#username');
        userNameElement.textContent = username;

    } else {
        // se não tem usuário mostre o formulário
        nameForm.style.display = 'block';
        welcomeConteiner.style.display = 'none';
        // e não mostre a mensagem de bem-vindo
    }
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem("name");
    checkUser();
});

checkUser();